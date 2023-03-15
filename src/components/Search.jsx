import React from "react";
import styles from "../styles/Search.module.css";

function Search({ query, setQuery, setOffset }) {
  function handleSearch(e) {
    setQuery(e.target.value);
    setOffset(25);
  }

  return (
    <div className="flex items-center justify-center w-full pb-10">
      <div className="flex items-center min-h-[72px] h-[72px] w-[600px] relative">
        <input
          value={query}
          type="text"
          onChange={handleSearch}
          className="w-full h-full border-0 rounded-full outline-none bg-primaryBButton hover:bg-hoverPrimaryBButton focus:bg-hoverPrimaryBButton py-[16px] pr-[175px] pl-[30px] transition-all duration-300 text-xl"
          placeholder="Search a Gif"
        />
        <div className={styles.search}>
          <button className="text-lg font-semibold ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export { Search };
