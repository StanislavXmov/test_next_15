"use client";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StandardSchemaV1Issue, useForm } from "@tanstack/react-form";

const passwordschema = z.object({
  email: z.string().email("Email must be valide"),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirm_password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

type ErrorMessageType = string[] | StandardSchemaV1Issue[] | undefined;

const ErrorMessage = ({ metaErrors }: { metaErrors: ErrorMessageType }) => {
  if (metaErrors) {
    const error = metaErrors[0];
    if (typeof error === "string") {
      return <div className="text-red-400 text-xs">{error}</div>;
    } else {
      return <div className="text-red-400 text-xs">{error.message}</div>;
    }
  } else {
    return null;
  }
};

export function Form() {
  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues: {
      password: "",
      confirm_password: "",
      email: "",
    },
    onSubmit: async ({ value }) => {
      // Handle form submission
      console.log(value);
    },
    validators: {
      onChange: passwordschema,
    },
  });

  const validateEmail = async (value: string) => {
    try {
      const response = await fetch("http://localhost:3005/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value }),
      });
      const data = await response.json();
      return data as { message?: string; success: boolean };
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message, success: false };
      } else {
        return { message: "An unknown error occurred", success: false };
      }
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <Field
          name="email"
          validators={{
            onChangeAsync: async ({ value }) => {
              const result = await validateEmail(value);
              console.log({ result });

              if (!result.success && result.message) {
                return result.message;
              } else {
                if (result.success) {
                  return undefined;
                } else {
                  return "An unknown error occurred";
                }
              }
            },
          }}
        >
          {({ state, handleChange, handleBlur }) => (
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your email"
              />
              {!state.meta.isValid && state.meta.isTouched && (
                <ErrorMessage
                  metaErrors={state.meta.errors as ErrorMessageType}
                />
              )}
            </div>
          )}
        </Field>
        <Field name="password">
          {({ state, handleChange, handleBlur }) => (
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="text"
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your password"
              />
            </div>
          )}
        </Field>
        <Field
          name="confirm_password"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ value, fieldApi }) => {
              if (value !== fieldApi.form.getFieldValue("password")) {
                return "Passwords do not match";
              }
              return undefined;
            },
          }}
        >
          {({ state, handleChange, handleBlur }) => (
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="confirm_password">Password</Label>
              <Input
                id="confirm_password"
                type="text"
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Confirm your password"
              />
              {!state.meta.isValid && state.meta.isTouched && (
                <ErrorMessage
                  metaErrors={state.meta.errors as ErrorMessageType}
                />
              )}
            </div>
          )}
        </Field>
      </form>
      <Subscribe
        selector={(state) => [
          state.values.password,
          state.values.confirm_password,
        ]}
      >
        {([password, confirm_password]) => (
          <div className="text-xs">
            <pre>{JSON.stringify({ password, confirm_password }, null, 2)}</pre>
          </div>
        )}
      </Subscribe>
      {/* <button
        onClick={async (e) => {
          e.preventDefault();
          validateEmail("test@gmail.com");
        }}
      >
        VALIDATE
      </button> */}
    </div>
  );
}
