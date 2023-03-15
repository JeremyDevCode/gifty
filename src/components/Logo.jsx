import React from "react";
import { LogoIcon } from "../assets/icons/LogoIcon";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 cursor-pointer hover:scale-110 transition-transform">
      <LogoIcon />
      <h1 className="text-2xl font-bold">Gifty</h1>
    </div>
  );
}

export { Logo };
