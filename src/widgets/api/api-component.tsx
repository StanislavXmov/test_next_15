"use client";

import { z, ZodError } from "zod";
import { getResponse } from "./services";

export const ErrorResponse = z.object({
  message: z.string(),
});

export const getResponseSchema = <T extends z.ZodType>(schema: T) => {
  return z.discriminatedUnion("success", [
    z.object({
      success: z.literal(true),
      data: schema,
    }),
    z.object({
      success: z.literal(false),
      error: ErrorResponse,
    }),
  ]);
};

const UserId = z.string().brand("UserId");
export type UserIdType = z.infer<typeof UserId>;

const TaskDto = z.object({
  id: UserId,
  title: z.string(),
  type: z.string(),
});
export type TaskDtoType = z.infer<typeof TaskDto>;

const TestDto = z.object({
  id: UserId,
  title: z.string(),
  description: z.string(),
  tasks: TaskDto.array(),
});

export type TestDto = z.infer<typeof TestDto>;

export const GetTestResponse = getResponseSchema(TestDto);
export type GetTestResponse = z.infer<typeof GetTestResponse>;

export function ApiComponent() {
  const handleGetResponse = async () => {
    const response = await getResponse();
    try {
      const parsed = GetTestResponse.parse(response);
      console.log({ parsed });
    } catch (error) {
      if (error instanceof ZodError) {
        error.issues.forEach((e) =>
          console.log({ code: e.code, message: e.message, path: e.path })
        );
      }
    }
  };

  return (
    <div>
      <button
        className="py-1 px-2 border border-gray-400 rounded-lg bg-none cursor-pointer hover:bg-gray-200"
        onClick={handleGetResponse}
      >
        Get Response
      </button>
    </div>
  );
}
