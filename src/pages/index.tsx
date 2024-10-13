import { TaskList } from "@/components/molecules/task-list";
import { TaskListSkeleton } from "@/components/molecules/task-list-skeleton";
import { CreateTaskButton } from "@/components/organisms/create-task-button";
import { PageTemplate } from "@/components/templates/page-template";
import { api } from "@/utils/api";

export default function Home() {
  const { data: tasks = [], isPending, refetch } = api.task.list.useQuery();
  return (
    <>
      <PageTemplate>
        {!isPending && <TaskList tasks={tasks} />}
        {isPending && <TaskListSkeleton />}
      </PageTemplate>
      <CreateTaskButton onSuccess={refetch} />
    </>
  );
}
