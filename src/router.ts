import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./components/Authentication";
import { Home } from "./components/Home";
import { Markdown } from "./pages/Markdown";


export const router = createBrowserRouter([

  {
    path: "/",
    Component: Home,
  },

  {
    path: "/signin",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Register,
  },
  {
    path: "/edit-new-post",
    Component: Markdown
  }

]);
