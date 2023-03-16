import React, { useEffect, useState } from "react";
import { TrendingIcon } from "../assets/icons/TrendingIcon";
import style from "../styles/GifsLayout.module.css";

function Trending({ gifs, query }) {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    function getTreding() {
      fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=Bn7gSVZdOT2DiCPmEMKza4EVjxpif7qh&limit=25&rating=g"
      )
        .then((response) => response.json())
        .then((data) => setTrending(data.data));
    }
    getTreding();
  }, []);

  return (
    <main className="flex flex-col m-0 w-full justify-center gap-5">
      <div className="flex items-center gap-2">
        <TrendingIcon />
        <h2 className="text-primaryBText font-semibold text-xl">Trending</h2>
      </div>
      <div className="columns-4 gap-5">
        {gifs && query == ""
          ? trending?.map((trend) => {
              if (trend?.images.downsized.url) {
                return (
                  <img
                    className="w-full rounded-md object-cover mb-5"
                    key={trend?.id}
                    src={trend?.images?.downsized?.url}
                    alt={trend?.title}
                  />
                );
              } else {
                return null;
              }
            })
          : gifs?.map((trend) => {
              if (trend?.images.downsized.url) {
                return (
                  <img
                    className="w-full rounded-md object-cover mb-5"
                    key={trend?.id}
                    src={trend?.images?.downsized?.url}
                    alt={trend?.title}
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

export { Trending };
