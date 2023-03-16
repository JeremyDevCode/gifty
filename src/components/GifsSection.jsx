import React, { useEffect, useState } from "react";
import ThunderIcon from "../assets/icons/ThunderIcon";
import { TrendingIcon } from "../assets/icons/TrendingIcon";
import { useGifty } from "../modules/useGifty";
import style from "../styles/GifsLayout.module.css";

function GifsSection({ gifs, isSearching }) {
  return (
    <main className="flex flex-col m-0 w-full justify-center gap-5">
      <div className="flex items-center gap-2">
        {isSearching ? <ThunderIcon /> : <TrendingIcon />}
        <h2 className="text-primaryBText font-semibold text-xl">Trending</h2>
      </div>
      <div className="columns-2 sm:columns-4 gap-5">
        {gifs?.map((gif) => {
          if (gif?.images.downsized.url) {
            return (
              <img
                className="w-full rounded-md object-cover mb-5"
                key={gif?.id}
                src={gif?.images?.downsized?.url}
                alt={gif?.title}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </main>
  );
}

export { GifsSection };
