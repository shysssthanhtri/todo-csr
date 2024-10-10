import { z } from "zod";

import type { UserWithRelations } from "./UserSchema";
import { UserWithRelationsSchema } from "./UserSchema";

/////////////////////////////////////////
// TASK SCHEMA
/////////////////////////////////////////

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  userId: z.string(),
  checked: z.boolean(),
  createdAt: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;

/////////////////////////////////////////
// TASK RELATION SCHEMA
/////////////////////////////////////////

export type TaskRelations = {
  user: UserWithRelations;
};

export type TaskWithRelations = z.infer<typeof TaskSchema> & TaskRelations;

export const TaskWithRelationsSchema: z.ZodType<TaskWithRelations> =
  TaskSchema.merge(
    z.object({
      user: z.lazy(() => UserWithRelationsSchema),
    }),
  );

export default TaskSchema;
