import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { type ITaskDto } from "@/dtos/task/task.dto";

interface TaskItemProps {
  task: ITaskDto;
}
export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <Card>
      <CardContent className="pt-6">{task.title}</CardContent>
    </Card>
  );
};
