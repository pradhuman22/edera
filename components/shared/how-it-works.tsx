import Image from "next/image";
import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="py-5 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-20 lg:grid-cols-5">
          <div className="relative col-span-2 aspect-square overflow-hidden rounded-lg">
            <Image
              src={"/how-it-works.png"}
              alt="how-it-works"
              fill
              priority
              quality={90}
            />
          </div>
          <div className="col-span-3">
            <div className="">
              <h2 className="mb-1 text-2xl font-[550]">How It Works ?</h2>
              <p>Finding Room Easily Following Below Steps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
