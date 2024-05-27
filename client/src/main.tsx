import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store.ts";

import { AllList, NewList, TaskList } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/archive",
        element: <h1>hi</h1>,
      },
      { path: "/all_list", element: <AllList /> },
      { path: "/user/:id", element: <h1>user</h1> },
      { path: "/new_list", element: <NewList /> },
      { path: "task/:id", element: <TaskList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
