import React from "react";
import ThunderIcon from "../assets/icons/ThunderIcon";
import { TrendingIcon } from "../assets/icons/TrendingIcon";
import { Gif } from "./Gif";
import { Loading } from "./Loading";

function GifsSection({ gifs, loading, isSearching }) {
  return (
    <main className="flex flex-col m-0 w-full justify-center gap-5">
      <div className="flex items-center gap-2">
        {isSearching ? <ThunderIcon /> : <TrendingIcon />}
        <h2 className="text-primaryBText font-semibold text-xl">Trending</h2>
      </div>
      {loading && <Loading />}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-5">
        <Gif gifs={gifs} />
      </div>
    </main>
  );
}

export { GifsSection };
