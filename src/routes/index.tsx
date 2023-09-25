import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import Banner from "~/components/core/banner/banner";
import { Footer } from "~/components/core/footer/footer";
import Header from "~/components/core/header/header/header";
import HomeSearch from "~/components/core/home-search/home-search";
import SectionArtists from "~/components/core/section-artists/section-artists";
import SectionInfo from "~/components/core/section-info/section-info";
import SectionProducts from "~/components/core/section-products/section-products";
import SectionSuscribe from "~/components/core/section-suscribe/section-suscribe";
import Submenu from "~/components/core/submenu/submenu";
import { CartContext } from "~/context/cart";

export default component$(() => {
  const cart = useStore({
    products: [],
  });
  useContextProvider(CartContext, cart);

  return (
    <>
      <Header />
      <Submenu />
      <Banner />
      <HomeSearch />
      <SectionProducts />
      <SectionArtists />
      <SectionInfo />
      <SectionSuscribe />
      <Footer />
    </>
  );
});
