import { CreateTaskDto } from "@/dtos/task/create-task.dto";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const taskRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateTaskDto)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
    }),
});
