import React, { type HTMLAttributes } from "react";

import { Header } from "@/components/organisms/header";
import { cn } from "@/lib/utils";

interface PageTemplateProps {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
export const PageTemplate = ({ children, className }: PageTemplateProps) => {
  return (
    <>
      <Header />
      <div className={cn("container mx-auto p-4", className)}>{children}</div>
    </>
  );
};
