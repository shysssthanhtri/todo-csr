import { CreateTaskButton } from "@/components/organisms/create-task-button";
import { TaskListController } from "@/components/organisms/task-list-controller";
import { PageTemplate } from "@/components/templates/page-template";

export default function Home() {
  return (
    <>
      <PageTemplate>
        <TaskListController />
      </PageTemplate>
      <CreateTaskButton />
    </>
  );
}
