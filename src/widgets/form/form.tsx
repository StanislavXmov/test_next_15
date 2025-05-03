"use client";

import * as React from "react";
import { z } from "zod";
import { DateTime } from "luxon";

function emptyStringToUndefined(value: string | undefined) {
  return value?.trim() === "" ? undefined : value;
}

const UserBaseData = z.object({
  name: z.string().min(3, "Name must be at least 3 symbols"),
  age: z.number().int().min(18, "Age must be at least 18"),
});

const ConfirmPasswordData = z
  .object({
    password: z.string(),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

const AggreementData = z
  .object({
    aggreement: z.boolean(),
  })
  .refine((value) => value.aggreement, {
    message: "Aggreement",
  });

const UserRoleData = z.object({
  role: z.literal("user"),
});

const AdminRoleData = z.object({
  role: z.literal("admin"),
  expired: z
    .string()
    .transform((value) => DateTime.fromISO(value))
    .refine((value): value is DateTime<true> => value.isValid, {
      message: "Invalid date",
    })
    .refine(
      (date) => {
        return date.diffNow().as("milliseconds") > 0;
      },
      {
        message: "Expired must be in the future",
      }
    ),
});

const RoleData = z.discriminatedUnion("role", [AdminRoleData, UserRoleData]);

const FormResultData = UserBaseData.and(ConfirmPasswordData)
  .and(AggreementData)
  .and(RoleData);

const FormData = z
  .object({
    name: z.string().transform(emptyStringToUndefined),
    age: z
      .string()
      .transform(emptyStringToUndefined)
      .transform((value) => (value ? Number(value) : undefined)),
    aggreement: z.boolean(),
    role: z.string(),
    expired: z.string().optional().transform(emptyStringToUndefined),
    password: z.string().transform(emptyStringToUndefined),
    passwordConfirm: z.string().transform(emptyStringToUndefined),
  })
  .pipe(FormResultData);

type FormDataType = z.input<typeof FormData>;

const Errors = ({ errors }: { errors?: string[] }) => {
  if (!errors) return null;
  return <p style={{ color: "red" }}>{errors.join(", ")}</p>;
};

export function Form() {
  const [state, setState] = React.useState<FormDataType>({
    name: "",
    age: "",
    aggreement: false,
    role: "user",
    password: "",
    passwordConfirm: "",
  });

  const validationResult = FormData.safeParse(state);
  const errors = validationResult.success
    ? undefined
    : validationResult.error.flatten();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ validationResult });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 4 }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={state.name}
        placeholder="name"
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <Errors errors={errors?.fieldErrors.name} />

      <input
        type="number"
        name="age"
        placeholder="age"
        value={state.age}
        onChange={(e) => setState({ ...state, age: e.target.value })}
      />
      <Errors errors={errors?.fieldErrors.age} />

      <select
        name="role"
        onChange={(e) =>
          setState({ ...state, role: e.target.value, expired: "" })
        }
        value={state.role}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      {state.role === "admin" && (
        <>
          <input
            type="date"
            name="expired"
            placeholder="expired"
            onChange={(e) =>
              setState({
                ...state,
                expired: e.target.value,
              })
            }
            value={state.expired}
          />
          <Errors errors={errors?.fieldErrors.expired} />
        </>
      )}
      <input
        type="password"
        name="password"
        value={state.password}
        placeholder="password"
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <Errors errors={errors?.fieldErrors.password} />

      <input
        type="password"
        name="passwordConfirm"
        value={state.passwordConfirm}
        placeholder="password confirm"
        onChange={(e) =>
          setState({ ...state, passwordConfirm: e.target.value })
        }
      />
      <Errors errors={errors?.fieldErrors.passwordConfirm} />

      <input
        type="checkbox"
        name="aggreement"
        checked={state.aggreement}
        onChange={(e) => setState({ ...state, aggreement: e.target.checked })}
      />
      <button type="submit">Submit</button>
      <Errors errors={errors?.formErrors} />
    </form>
  );
}
