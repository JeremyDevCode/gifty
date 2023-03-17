import React, { useEffect, useRef, useState } from "react";
import ThunderIcon from "../assets/icons/ThunderIcon";
import { TrendingIcon } from "../assets/icons/TrendingIcon";

function GifsSection({ gifs, isSearching }) {
  const [check, setCheck] = useState(false);

  function copyImage(source) {
    navigator.clipboard
      .writeText(source)
      .then(() => {
        setCheck(true);
        setTimeout(() => {
          setCheck(false);
        }, 1500);
      })
      .catch((e) => {
        alert("Cannot copy password to clipboard");
        console.log(e);
      });
  }

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
                onClick={() => copyImage(gif?.images?.downsized?.url)}
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
