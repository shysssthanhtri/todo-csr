import { z } from "zod";

import TaskSchema from "@/schemas/modelSchema/TaskSchema";

export const TaskDto = z.object(TaskSchema.shape).extend({
  title: z.string().min(3).max(50),
  description: z.string().min(0).max(200).nullish(),
});
export type ITaskDto = z.infer<typeof TaskDto>;
