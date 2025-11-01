import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

const DashboardRoomsListPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-xl font-semibold">My Rooms</h1>
          <p className="text-muted-foreground text-sm">
            Manage your room listings
          </p>
        </div>
        <Button asChild>
          <Link href={"/dashboard/rooms/create"}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add New Room
          </Link>
        </Button>
      </div>
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground mb-4">
            You haven't listed any rooms yet
          </p>
          <Button asChild>
            <Link href={"/dashboard/rooms/create"}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Create Your First Listing
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardRoomsListPage;
