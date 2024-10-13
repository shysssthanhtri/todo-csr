import Link from "next/link";
import React from "react";

import { ThemeToggleButton } from "@/components/organisms/theme-toggle-button";
import { UserButton } from "@/components/organisms/user-button";

export const Header = () => {
  return (
    <header className="z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <div>
          <Link href={"/"} className="font-bold">
            Taskify
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <ThemeToggleButton />
          <UserButton />
        </div>
      </div>
    </header>
  );
};
