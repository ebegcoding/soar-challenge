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
        Component: () => <div>Accounts</div>,
      },
      {
        path: "investments",
        Component: () => <div>Investments</div>,
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
        Component: () => <div>Loans</div>,
      },
      {
        path: "services",
        Component: () => <div>Services</div>,
      },
      {
        path: "privileges",
        Component: () => <div>Privileges</div>,
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
