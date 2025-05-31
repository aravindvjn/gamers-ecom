import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SingleSectionType } from "../type";

const SingleSection: React.FC<SingleSectionType> = ({
  end_point,
  name,
  thumbnail,
}) => {
  return (
    <Link
      className="rounded overflow-hidden active:translate-y-0.5 shadow-lg shadow-black border-1 border-neutral-700 aspect-square relative w-full flex flex-col justify-end"
      href={end_point}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${thumbnail.src})`,
        backgroundPosition: "center",
        backgroundSize:'cover'
      }}
    >
      <p className="text-[24px] font-semibold text-center">{name}</p>
    </Link>
  );
};

export default SingleSection;
