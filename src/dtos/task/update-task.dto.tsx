import { z } from "zod";

import { TaskDto } from "@/dtos/task/task.dto";

export const UpdateTaskDto = z.object(TaskDto.shape).pick({
  id: true,
  title: true,
  description: true,
});
