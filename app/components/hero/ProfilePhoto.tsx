"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#ede8fe]">
        <span className="font-syne text-2xl font-bold text-[#6355c7]">MMK</span>
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt="Manasi Koppal"
      fill
      className="object-cover object-top"
      onError={() => setFailed(true)}
      priority
    />
  );
}
