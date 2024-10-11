import { zodResolver } from "@hookform/resolvers/zod";
import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateTaskDto } from "@/dtos/task/create-task.dto";

interface TaskFormProps {
  isPending?: boolean;
  onSubmit?: (value: FormSchema) => void;
}
export type TaskFormRef = {
  reset: () => void;
  submit: () => void;
};

export const TaskForm = forwardRef<TaskFormRef, TaskFormProps>((props, ref) => {
  const { isPending, onSubmit } = props;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: null,
    },
  });

  const handleSubmit = useCallback(
    (value: FormSchema) => {
      onSubmit?.(value);
    },
    [onSubmit],
  );

  useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        form.reset();
        setTimeout(() => {
          form.setFocus("title");
        }, 1);
      },
      submit: () => {
        void form.handleSubmit(handleSubmit)();
      },
    }),
    [form, handleSubmit],
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Task title"
                  {...field}
                  value={field.value ?? ""}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Task description"
                  {...field}
                  value={field.value ?? ""}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
});

TaskForm.displayName = "TaskForm";

const formSchema = CreateTaskDto;
type FormSchema = z.infer<typeof formSchema>;
