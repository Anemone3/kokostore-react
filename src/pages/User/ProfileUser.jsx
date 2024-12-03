import { AuthComponent } from "./AuthComponent/AuthComponent";

export const ProfileUser = () => {
  return (
    <div className="flex min-h-screen flex-col gap-6 bg-gray-100 p-6 lg:flex-row">
      <div className="flex-1 overflow-y-auto rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Profile</h2>
        <AuthComponent/>
      </div>
    </div>
  );
};
