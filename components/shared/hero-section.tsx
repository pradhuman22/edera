import React from "react";
import Image from "next/image";
import HeroSearchBox from "./hero-search-box";

const HeroSection = () => {
  return (
    <section className="py-5 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-3 grid gap-1.5 text-3xl font-bold lg:text-4xl">
              <span className="text-cyan-900">Find Your Future</span>
              <span>Dream Accommodation</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Want to find an accommodation? We are ready to help you find one
              that suits your lifestyle and needs.
            </p>
            <HeroSearchBox />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={"/hero-bg.jpg"}
              alt="hero bg"
              fill
              priority
              quality={90}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
