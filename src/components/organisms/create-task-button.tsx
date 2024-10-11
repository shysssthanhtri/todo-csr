import { Plus } from "lucide-react";
import React, { useRef, useState } from "react";

import { TaskForm, type TaskFormRef } from "@/components/forms/task-form";
import { Button, ButtonLoading } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { api } from "@/utils/api";

interface CreateTaskButtonProps {
  onSuccess?: () => void;
}
export const CreateTaskButton = ({ onSuccess }: CreateTaskButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMultipleCreating, setIsMultipleCreating] = useState(false);
  const ref = useRef<TaskFormRef>(null);

  const { isPending, mutate } = api.task.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Saved",
      });
      ref.current?.reset();

      if (!isMultipleCreating) {
        setIsOpen(false);
      }

      onSuccess?.();
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
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg"
          size="icon"
        >
          <Plus className="h-6 w-6" />
          <span className="sr-only">Add new task</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <TaskForm isPending={isPending} onSubmit={mutate} ref={ref} />
        <DialogFooter className="gap-x-6">
          <div className="flex items-center gap-x-2 text-sm text-gray-500">
            <Checkbox
              checked={isMultipleCreating}
              onClick={() => setIsMultipleCreating(!isMultipleCreating)}
              disabled={isPending}
            />
            Add more
          </div>
          <ButtonLoading
            type="submit"
            isLoading={isPending}
            onClick={() => {
              ref.current?.submit();
            }}
          >
            Add
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
