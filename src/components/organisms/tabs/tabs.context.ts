import { createSafeContext } from "@/utils/context";
import { TabsContext } from "./tabs.types";

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContext>(
  "Tabs was not found in tree"
);
