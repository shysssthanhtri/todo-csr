import { Plus } from "lucide-react";
import React, { useState } from "react";

import { TaskForm } from "@/components/forms/task-form";
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

export const CreateTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMultipleCreating, setIsMultipleCreating] = useState(false);

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
        <TaskForm />
        <DialogFooter className="gap-x-6">
          <div className="flex items-center gap-x-2 text-sm text-gray-500">
            <Checkbox
              checked={isMultipleCreating}
              onClick={() => setIsMultipleCreating(!isMultipleCreating)}
            />
            Add more
          </div>
          <ButtonLoading type="submit">Add</ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
