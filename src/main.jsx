import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { MainScreen } from "./pages/MainScreen/MainScreen";
import { SignUp } from "./pages/SignUp/SignUp";
import { createHashRouter, RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createHashRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/posts",
    element: <MainScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// Comito?