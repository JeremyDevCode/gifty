import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { GifsSection } from "../components/GifsSection";
import { useGifty } from "../modules/useGifty";
import { Footer } from "../components/Footer";
import Head from "next/head";

export default function Home() {
  const { state } = useGifty();
  const { trending, loading } = state;
  return (
    <div className="w-screen min-h-screen bg-bgBlack h-fit text-primaryBText">
      <Head>
        <title>{"Gifty"}</title>
        <meta name="og:site_name" content="Jeremy Mosquera" />
        <meta
          name="description"
          content="Web application to find gifs, enjoy and share them. It is connected to the Giphy API, it has a trending section and you can search for gifs of your favorite topic! In addition to being able to copy and paste them wherever you want, perfect for having fun with your friends."
        ></meta>

        <meta itemProp="name" content="Gifty" />
        <meta
          itemProp="description"
          content="Web application to find gifs, enjoy and share them. It is connected to the Giphy API, it has a trending section and you can search for gifs of your favorite topic! In addition to being able to copy and paste them wherever you want, perfect for having fun with your friends."
        />
        <meta
          itemProp="image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680330307/Portfolio/additionalImages/gifty_khzw9t.png"
        />

        <meta
          property="og:url"
          content="https://gifty-jeremydevcode.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gifty" />
        <meta
          name="og:description"
          content="Web application to find gifs, enjoy and share them. It is connected to the Giphy API, it has a trending section and you can search for gifs of your favorite topic! In addition to being able to copy and paste them wherever you want, perfect for having fun with your friends."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680330307/Portfolio/additionalImages/gifty_khzw9t.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="238" />
        <meta property="og:image:height" content="102" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gifty" />
        <meta
          name="twitter:description"
          content="Web application to find gifs, enjoy and share them. It is connected to the Giphy API, it has a trending section and you can search for gifs of your favorite topic! In addition to being able to copy and paste them wherever you want, perfect for having fun with your friends."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680330307/Portfolio/additionalImages/gifty_khzw9t.png"
        />
      </Head>
      <div className="sm:px-[10%] px-5">
        <Navbar />
        <Header />
        <Search />
        <GifsSection gifs={trending} loading={loading} isSearching={false} />
        <Footer />
      </div>
    </div>
  );
}
