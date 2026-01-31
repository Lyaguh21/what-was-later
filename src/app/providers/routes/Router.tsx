import { createBrowserRouter, RouterProvider } from "react-router";
import { Menu } from "@/pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
