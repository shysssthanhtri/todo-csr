import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { type ITaskDto } from "@/dtos/task/task.dto";
import { cn } from "@/lib/utils";

interface TaskItemProps {
  task: ITaskDto;
}
export const TaskItem = ({ task }: TaskItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div className="flex items-center">
          <Checkbox className="mr-4" />
          {task.title}
          {expandedButton}
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
