import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { GifsSection } from "../components/GifsSection";
import { useGifty } from "../modules/useGifty";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";

export default function Home() {
  const { state } = useGifty();
  const { trending } = state;
  return (
    <div className="w-screen bg-bgBlack h-fit min-h-screen text-primaryBText">
      <div className="sm:px-[10%] px-5">
        <Navbar />
        <Header />
        <Search />
        <GifsSection gifs={trending} isSearching={false} />
        <Footer />
      </div>
    </div>
  );
}
