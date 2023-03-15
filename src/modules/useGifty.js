import { useEffect, useState } from "react";
import axios from "axios";

function useGifty() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);

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
          api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
      })
        .then((res) => {
          setGifs(res.data.data);
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
  };

  const stateUpdaters = {
    useGiftySearch,
  };

  return { state, stateUpdaters };
}

export { useGifty };
