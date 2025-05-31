import { gamesData } from "@/constants/games-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SingleSection from "./single-section";

const FeaturesSection = () => {
  return (
    <div className="border-t-1 border-neutral-700 center-col pb-10 px-[100px]">
      <h2 className="text-[40px] py-10 font-bold text-center">Explore By Games</h2>
      <div className="grid grid-cols-4 gap-8 w-full">
        {gamesData.map((item, index) => (
          <SingleSection key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
