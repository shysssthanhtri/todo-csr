import { CreateTaskDto } from "@/dtos/task/create-task.dto";
import { TaskDto } from "@/dtos/task/task.dto";
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

  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.task.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  delete: protectedProcedure
    .input(TaskDto.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.delete({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
      });
    }),
});
