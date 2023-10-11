import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import Banner from "~/components/core/banner/banner";
import HomeSearch from "~/components/core/home-search/home-search";
import SectionArtists from "~/components/core/section-artists/section-artists";
import SectionInfo from "~/components/core/section-info/section-info";
import SectionProducts from "~/components/core/section-products/section-products";
import SectionSuscribe from "~/components/core/section-suscribe/section-suscribe";
import { CartContext } from "~/context/cart";

export default component$(() => {
  const cart = useStore({
    products: [],
    numberProducts:0
  });
  useContextProvider(CartContext, cart);

  return (
    <>
      <Banner />
      <HomeSearch />
      <SectionProducts />
      <SectionArtists />
      <SectionInfo />
      <SectionSuscribe />
    </>
  );
});
