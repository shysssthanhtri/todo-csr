import React from "react";

import { TaskItem } from "@/components/molecules/task-item";
import { type ITaskDto } from "@/dtos/task/task.dto";

interface TaskListProps {
  tasks: ITaskDto[];
}
export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
