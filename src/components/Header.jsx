import React from "react";
import style from "../styles/Header.module.css";

function Header() {
  return (
    <header className="flex items-center justify-center">
      <h1 className="flex gap-5 sm:gap-0 sm:h-[180px] sm:text-[36px] lg:text-[80px] lg:h-fit text-[1.5rem] font-black text-center py-10 sm:py-5 tracking-[-0.02em] select-none">
        <span className={style.item}>Search.</span>
        <span className={style.item}>Enjoy.</span>
        <span className={style.item}>Share.</span>
      </h1>
    </header>
  );
}

export { Header };
