import { createSafeContext } from "@/utils/context";

export const [AppShellProvider, useAppShellContext] = createSafeContext<symbol>(
  "AppShell was not found in tree"
);
