import React from "react";

import { TaskList } from "@/components/molecules/task-list";
import { api } from "@/utils/api";

export const TaskListController = () => {
  const { data: tasks = [] } = api.task.list.useQuery();
  return <TaskList tasks={tasks} />;
};
