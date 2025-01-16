import { RouteObject } from "react-router-dom";

export const routes = [
  {
    path: "/",
    async lazy() {
      const { Home } = await import("@/features/home");
      return { Component: Home };
    },
    children: [
      {
        path: "",
        async lazy() {
          const { Dashboard } = await import("@/features/dashboard");
          return { Component: Dashboard };
        },
      },
      {
        path: "transactions",
        async lazy() {
          const { Transactions } = await import("@/features/transactions");
          return { Component: Transactions };
        },
      },
      {
        path: "accounts",
        async lazy() {
          const { Accounts } = await import("@/features/accounts");
          return { Component: Accounts };
        },
      },
      {
        path: "investments",
        async lazy() {
          const { Investments } = await import("@/features/investments");
          return { Component: Investments };
        },
      },
      {
        path: "cards",
        async lazy() {
          const { Cards } = await import("@/features/cards");
          return { Component: Cards };
        },
      },
      {
        path: "loans",
        async lazy() {
          const { Loans } = await import("@/features/loans");
          return { Component: Loans };
        },
      },
      {
        path: "services",
        async lazy() {
          const { Services } = await import("@/features/services");
          return { Component: Services };
        },
      },
      {
        path: "privileges",
        async lazy() {
          const { Privileges } = await import("@/features/privileges");
          return { Component: Privileges };
        },
      },
      {
        path: "settings",
        async lazy() {
          const { Settings } = await import("@/features/settings");
          return { Component: Settings };
        },
        children: [
          {
            path: "",
            async lazy() {
              const { Profile } = await import("@/features/settings");
              return { Component: Profile };
            },
          },
          {
            path: "preferences",
            async lazy() {
              const { Preferences } = await import("@/features/settings");
              return { Component: Preferences };
            },
          },
          {
            path: "security",
            async lazy() {
              const { Security } = await import("@/features/settings");
              return { Component: Security };
            },
          },
        ],
      },
    ],
  },
] satisfies RouteObject[];
