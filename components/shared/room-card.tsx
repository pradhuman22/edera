import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

interface RoomCardProps {
  id: number;
  title: string;
  image: string;
  location: string;
  price: number;
}

const RoomCard = ({ title, image, id, location, price }: RoomCardProps) => {
  return (
    <Link href={`/rooms/${id}`}>
      <Card className="overflow-hidden pt-0 transition-shadow hover:shadow-lg">
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={image || "/hero-bg.jpg"}
            alt={title || "hero"}
            fill
            priority
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="px-4">
          <h3 className="mb-3 text-xl font-[550] text-balance">{title}</h3>
          <p className="text-muted-foreground mb-2 flex items-center gap-1 text-sm">
            <MapPin className="h-3 w-3" />
            {location}
          </p>
          <p className="text-accent-foreground/60 text-lg font-medium">
            {formatPrice(price, "JPY")}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default RoomCard;
