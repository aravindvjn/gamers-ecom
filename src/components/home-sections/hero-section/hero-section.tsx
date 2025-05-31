import React from "react";
import { Button } from "../../ui/button";

const HeroSection = () => {
  return (
    <div
      className="h-screen center-col text-white text-center"
      style={{
        background: "url('images/hero-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[60px] font-bold w-1/2 leading-[60px]">
        Find Your Next Gaming Account
      </h1>
      <p className="text-[24px] mt-4">
        Buy and sell gaming accounts securely for your favorite games.
      </p>
      <div className="center-row gap-2 mt-4">
        <Button className="bg-neutral-700 h-[40px]">Browse Accounts</Button>
        <Button className="bg-white text-black h-[40px] ">List Your Account</Button>
      </div>
    </div>
  );
};

export default HeroSection;
