import Link from "next/link";
import React, { useState } from "react";
import { useSticky } from "../hooks/useSticky";
import styles from "../styles/Search.module.css";

function Search() {
  const { sticky, stickyRef } = useSticky();
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div
      className={`flex ${
        sticky ? "sticky top-[-1px]" : "block"
      } items-center justify-center w-full pb-10 transition-all`}
    >
      <div
        ref={stickyRef}
        className={`flex items-center min-h-[72px] h-[72px] w-[600px] relative`}
      >
        <input
          value={query}
          type="text"
          onChange={handleSearch}
          className={`w-full h-full border-0 ${
            !sticky ? "rounded-full" : "rounded-b-lg rounded-t-none"
          } outline-none bg-primaryBButton hover:bg-hoverPrimaryBButton focus:bg-hoverPrimaryBButton py-[16px] pr-[175px] pl-[30px] text-xl`}
          placeholder="Search a Gif"
        />
        <div className={styles.search}>
          <Link
            className="flex justify-center items-center rounded-full text-lg font-semibold w-full h-full"
            href={query === "" ? `/` : `/search/${query}`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Search };
