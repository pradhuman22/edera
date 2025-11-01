import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/dashboard/profile/profile-form";

const UserProfilePage = async () => {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });
  if (!session) redirect("/login");
  return (
    <div className="container mx-auto max-w-7xl space-y-6 px-4 py-5 lg:px-8">
      <div className="mb-4">
        <h1 className="text-2xl font-medium">User Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account information and security.
        </p>
      </div>
      <ProfileForm user={session.user} />
    </div>
  );
};

export default UserProfilePage;
