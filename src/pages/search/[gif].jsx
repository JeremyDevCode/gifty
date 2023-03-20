import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GifsSection } from "../../components/GifsSection";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { useGifty } from "../../modules/useGifty";
import { Footer } from "../../components/Footer";

const Gif = () => {
  const router = useRouter();
  const { gif } = router?.query;
  const { state, stateUpdaters } = useGifty();
  const { gifs, loading } = state;
  const { useGiftySearch } = stateUpdaters;
  useEffect(() => {
    gif && useGiftySearch(gif);
  }, [gif]);

  return (
    <div className="w-screen bg-bgBlack h-fit min-h-screen text-primaryBText">
      <div className="sm:px-[10%] px-5">
        <Navbar />
        <Header />
        <Search />
        <GifsSection gifs={gifs} loading={loading} isSearching={true} />
        <Footer />
      </div>
    </div>
  );
};

export default Gif;
