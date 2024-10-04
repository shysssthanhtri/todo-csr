import React from "react";

import { Header } from "@/components/organisms/header";

interface PageTemplateProps {
  children: React.ReactNode;
}
export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">{children}</div>
    </>
  );
};
