import { Trash2 } from "lucide-react";
import React, { useState } from "react";

import { Button, ButtonLoading } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type ITaskDto } from "@/dtos/task/task.dto";
import { toast } from "@/hooks/use-toast";
import { api } from "@/utils/api";

interface DeleteTaskButtonProps {
  taskId: ITaskDto["id"];
}
export const DeleteTaskButton = ({ taskId }: DeleteTaskButtonProps) => {
  const utils = api.useUtils();
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isPending } = api.task.delete.useMutation({
    onSuccess: () => {
      toast({
        title: "Successful",
      });
      setIsOpen(false);
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="ml-2 h-auto p-1"
          aria-label="Delete todo"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
          <ButtonLoading
            isLoading={isPending}
            variant="destructive"
            onClick={() => mutate({ id: taskId })}
          >
            Delete
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
