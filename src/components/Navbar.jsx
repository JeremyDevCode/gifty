import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

function Navbar() {
  return (
    <nav className="flex items-center justify-between pt-5">
      <Logo />
      <Menu />
    </nav>
  );
}

export { Navbar };
