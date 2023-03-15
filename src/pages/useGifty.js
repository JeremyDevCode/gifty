import React, { useEffect, useState } from "react";
import axios from "axios";

function useGifty() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const getTrending = () => {};

  const useGiftySearch = (query, offset) => {
    useEffect(() => {
      setGifs([]);
    }, [query]);

    useEffect(() => {
      setLoading(true);
      setError(false);
      axios({
        method: "GET",
        url: "https://api.giphy.com/v1/gifs/search",
        params: {
          q: query,
          offset: 25,
          limit: offset,
          rating: "g",
          lang: "en",
          api_key: "Bn7gSVZdOT2DiCPmEMKza4EVjxpif7qh",
        },
      })
        .then((res) => {
          setGifs(res.data.data);
          setHasMore(res.data.pagination.total_count > 0);
          setLoading(false);
        })
        .catch((e) => {
          setError(true);
        });
    }, [query, offset]);

    return { gifs };
  };

  const state = {
    loading,
    error,
    gifs,
    hasMore,
  };

  const stateUpdaters = {
    useGiftySearch,
  };

  return { state, stateUpdaters };
}

export { useGifty };
