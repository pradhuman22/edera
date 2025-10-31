import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const StatisticCard = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value: string;
  Icon: LucideIcon;
}) => {
  return (
    <Card>
      <CardContent className="relative space-y-2">
        <p className="text-lg">{title}</p>
        <p className="line-clamp-1 text-2xl font-semibold">{value}</p>
        <Icon className="absolute top-1 right-4 size-8" />
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
