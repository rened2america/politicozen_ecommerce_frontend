import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import Banner from "~/components/core/banner/banner";
import HomeSearch from "~/components/core/home-search/home-search";
import SectionArtists from "~/components/core/section-artists/section-artists";
import SectionInfo from "~/components/core/section-info/section-info";
import { CartContext } from "~/context/cart";

export default component$(() => {
  const cart = useStore({
    products: [],
    numberProducts: 0,
  });
  useContextProvider(CartContext, cart);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Banner />
        Variable: {process.env["VITE_URL_BACKEND"]}
        Type: {typeof process.env["VITE_URL_BACKEND"]}
        <HomeSearch />
        {/* <SectionProducts /> */}
        <SectionArtists />
      </div>

      <SectionInfo />
    </>
  );
});
