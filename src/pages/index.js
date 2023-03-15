import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Trending } from "../components/Trending";
import useGifty from "./useGifty";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(25);
  const { state } = useGifty();
  const { stateUpdaters } = useGifty();
  const { useGiftySearch } = stateUpdaters;

  const { gifs } = useGiftySearch(query, offset);
  return (
    <div className="w-screen bg-bgBlack h-fit min-h-screen text-primaryBText">
      <div className="px-[10%]">
        <Navbar />
        <Header />
        <Search query={query} setQuery={setQuery} setOffset={setOffset} />
        <Trending gifs={gifs} query={query} />
      </div>
    </div>
  );
}
