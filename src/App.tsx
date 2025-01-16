import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "./router/routes";

export function App() {
  return (
    <ThemeProvider theme={{}}>
      <Provider store={store}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </Provider>
    </ThemeProvider>
  );
}
