import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import { AuthenticationGuard } from "@/components/guards/authentication-guard";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { api } from "@/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={cn(GeistSans.className, "font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthenticationGuard>
            <Component {...pageProps} />
          </AuthenticationGuard>
          <Toaster />
        </ThemeProvider>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
