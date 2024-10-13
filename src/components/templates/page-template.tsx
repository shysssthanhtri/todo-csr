import React from "react";

import { Header } from "@/components/organisms/header";

interface PageTemplateProps {
  children: React.ReactNode;
}
export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="flex-1 overflow-auto p-4 pb-16 sm:pb-4">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};
