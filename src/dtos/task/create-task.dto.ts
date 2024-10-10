import { z } from "zod";

import { TaskDto } from "@/dtos/task/task.dto";

export const CreateTaskDto = z.object(TaskDto.shape).pick({
  title: true,
  description: true,
});
