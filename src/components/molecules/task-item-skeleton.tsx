import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TaskItemSkeleton = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <Skeleton className="h-6 w-1/3" />
      </CardContent>
    </Card>
  );
};

export default TaskItemSkeleton;
