import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "./router/routes";
import { GlobalStyles } from "./theme/global-styles";
import { theme } from "./theme/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </Provider>
    </ThemeProvider>
  );
}
