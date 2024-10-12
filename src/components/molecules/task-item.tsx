import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useMemo, useState } from "react";

import { DeleteTaskButton } from "@/components/organisms/delete-task-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { type ITaskDto } from "@/dtos/task/task.dto";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { api } from "@/utils/api";

interface TaskItemProps {
  task: ITaskDto;
}
export const TaskItem = ({ task }: TaskItemProps) => {
  const utils = api.useUtils();
  const [isExpanded, setIsExpanded] = useState(false);

  const { isPending, mutate } = api.task.check.useMutation({
    onSuccess: () => {
      void utils.task.list.refetch();
    },
    onError: (err) => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
        description: err.message,
      });
    },
  });

  const expandedButton = useMemo(() => {
    if (!task.description) return null;
    const Icon = isExpanded ? ChevronUp : ChevronDown;
    return (
      <Button
        variant="ghost"
        size="sm"
        className="ml-2 h-auto p-1"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? "Hide description" : "Show description"}
      >
        <Icon className="h-3 w-3" />
      </Button>
    );
  }, [isExpanded, task.description]);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              className="mr-4"
              checked={task.checked}
              disabled={isPending || task.checked}
              onCheckedChange={() => {
                mutate({ id: task.id });
              }}
            />
            <label
              className={`${task.checked ? "text-gray-500 line-through" : ""}`}
            >
              {task.title}
            </label>
            {expandedButton}
          </div>
          <DeleteTaskButton taskId={task.id} />
        </div>
        <div
          className={cn(
            `grid pb-0 transition-all duration-300 ease-in-out`,
            isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="mt-4 text-gray-600">{task.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
