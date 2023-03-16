import { useEffect, useState } from "react";
import axios from "axios";

function useGifty() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);

  const [trending, setTrending] = useState([]);

  const useGiftySearch = (query) => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://api.giphy.com/v1/gifs/search",
      params: {
        q: query,
        limit: 30,
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
  };

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

  const state = {
    loading,
    error,
    gifs,
    trending,
  };

  const stateUpdaters = {
    useGiftySearch,
  };

  return { state, stateUpdaters };
}

export { useGifty };
