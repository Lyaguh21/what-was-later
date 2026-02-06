import { createBrowserRouter, RouterProvider } from "react-router";
import { Menu, EventsList } from "@/pages/menu";
import { MainLayout } from "@/shared/ui/layouts";
import { Game } from "@/pages/game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/play",
        element: <Game />,
      },
      {
        path: "/events-list",
        element: <EventsList />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
