import { createBrowserRouter, RouterProvider } from "react-router";
import { Menu } from "@/pages/Menu";
import { MainLayout } from "@/shared/ui/layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
