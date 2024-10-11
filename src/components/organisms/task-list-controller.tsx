import React from "react";

import { TaskList } from "@/components/molecules/task-list";
import { TaskListSkeleton } from "@/components/molecules/task-list-skeleton";
import { api } from "@/utils/api";

export const TaskListController = () => {
  const { data: tasks = [], isPending } = api.task.list.useQuery();
  return (
    <>
      {!isPending && <TaskList tasks={tasks} />}
      {isPending && <TaskListSkeleton />}
    </>
  );
};
