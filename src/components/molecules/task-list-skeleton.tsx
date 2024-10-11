import React from "react";

import TaskItemSkeleton from "@/components/molecules/task-item-skeleton";

interface TaskListSkeletonProps {
  amount?: number;
}
export const TaskListSkeleton = ({ amount = 5 }: TaskListSkeletonProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      {Array.from({ length: amount }).map((_, index) => (
        <TaskItemSkeleton key={index} />
      ))}
    </div>
  );
};
