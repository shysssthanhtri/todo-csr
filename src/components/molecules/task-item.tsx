import React from "react";

import { type ITaskDto } from "@/dtos/task/task.dto";

interface TaskItemProps {
  task: ITaskDto;
}
export const TaskItem = ({ task }: TaskItemProps) => {
  return <div>TaskItem</div>;
};
