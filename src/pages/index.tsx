import { CreateTaskButton } from "@/components/organisms/create-task-button";
import { PageTemplate } from "@/components/templates/page-template";

export default function Home() {
  return (
    <>
      <PageTemplate>
        <div className="h-[2000px]">Hello</div>
      </PageTemplate>
      <CreateTaskButton />
    </>
  );
}
