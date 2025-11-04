"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className={`relative inline-block`}>
      <Image
        src={"/images/photo10.jpg"}
        alt="Sahana"
        width={500}
        height={500}
      />
    </div>
  );
}
