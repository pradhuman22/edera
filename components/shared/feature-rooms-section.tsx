import { rooms } from "@/constant";
import React from "react";
import RoomCard from "./room-card";

const FeatureRoomsSection = () => {
  return (
    <section className="py-5 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-7 text-3xl font-bold">Reserve The Finest Room</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              id={room.id}
              title={room.title}
              image={room.image}
              location={room.location}
              price={room.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureRoomsSection;
