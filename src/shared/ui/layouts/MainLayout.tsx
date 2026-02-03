import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="h-full w-full overflow-x-hidden min-h-screen flex justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900  px-1 md:px-4 lg:px-8 py-4">
      <Outlet />
    </div>
  );
}
