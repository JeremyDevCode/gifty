import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { GifsSection } from "../components/GifsSection";
import { useGifty } from "../modules/useGifty";
import { Footer } from "../components/Footer";
import Head from "next/head";

export default function Home() {
  const { state } = useGifty();
  const { trending } = state;
  return (
    <div className="w-screen bg-bgBlack h-fit min-h-screen text-primaryBText">
      <Head>
        <title>{"Gifty"}</title>
        <meta
          name="description"
          content="Web application to find funny gifs and share them with your friends"
        ></meta>
      </Head>
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
