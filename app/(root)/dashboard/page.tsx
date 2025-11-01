import StatisticCard from "@/components/dashboard/statistic-card";
import { auth } from "@/lib/auth";
import { BellDot, HouseIcon, ReceiptJapaneseYen } from "lucide-react";
import { headers } from "next/headers";

const DashboardPage = async () => {
  const data = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="container mx-auto max-w-7xl p-4 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-medium">
          Welcome back, {data?.user.name}
        </h1>
        <p className="text-muted-foreground">
          Track, manage and forecast your room
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 lg:gap-5">
        <StatisticCard
          title={"Rent Received"}
          value={"100000"}
          Icon={ReceiptJapaneseYen}
        />
        <StatisticCard title={"Booked Room"} value={"5"} Icon={HouseIcon} />
        <StatisticCard title={"Room Inquiry"} value={"300"} Icon={BellDot} />
      </div>
    </div>
  );
};

export default DashboardPage;
