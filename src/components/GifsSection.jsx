import React, { useEffect, useRef, useState } from "react";
import ThunderIcon from "../assets/icons/ThunderIcon";
import { TrendingIcon } from "../assets/icons/TrendingIcon";
import { CopiedButton } from "./CopiedButton";
import { CopyButton } from "./CopyButton";
import { Loading } from "./Loading";

function GifsSection({ gifs, loading, isSearching }) {
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
      {loading && <Loading />}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-5">
        {gifs?.map((gif) => {
          if (gif?.images.downsized.url) {
            return (
              <div
                key={gif.id}
                className="flex items-center justify-center relative w-full mb-5 group/details"
              >
                <img
                  onClick={() => copyImage(gif?.images?.downsized?.url)}
                  className="w-full rounded-md object-cover"
                  src={gif?.images?.downsized?.url}
                  alt={gif?.title}
                />
                <div className="hidden absolute w-full h-full bg-[#0A0A0A80] group-hover/details:flex">
                  {!check && (
                    <CopyButton
                      handleClick={() => copyImage(gif?.images?.downsized?.url)}
                    />
                  )}
                  {check && <CopiedButton />}
                </div>
              </div>
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
