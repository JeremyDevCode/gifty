import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSticky } from "../hooks/useSticky";
import styles from "../styles/Search.module.css";

function Search() {
  const { sticky, stickyRef } = useSticky();
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function handleAction(e) {
    e.preventDefault;
    console.log(query);
    router.push(`/search/${query}`);
  }

  return (
    <div
      className={`flex ${
        sticky ? "sticky top-[-1px]" : "block"
      } items-center justify-center w-full pb-10 transition-all z-50`}
    >
      <form
        onSubmit={handleAction}
        ref={stickyRef}
        className={`flex items-center h-[72px] w-[600px] relative`}
      >
        <input
          value={query}
          type="text"
          onChange={handleSearch}
          className={`w-full h-full border-0 ${
            !sticky ? "rounded-full" : "rounded-b-lg rounded-t-none"
          } outline-none bg-primaryBButton hover:bg-hoverPrimaryBButton focus:bg-hoverPrimaryBButton py-[16px] pr-[175px] pl-[30px] text-xl`}
          placeholder="Funny thing that's going through your mind"
        />
        <button className={styles.search}>
          <Link
            scroll={true}
            className="flex justify-center items-center rounded-full text-lg font-semibold w-full h-full"
            href={query === "" ? `/` : `/search/${query}`}
          >
            Get Started
          </Link>
        </button>
      </form>
    </div>
  );
}

export { Search };
