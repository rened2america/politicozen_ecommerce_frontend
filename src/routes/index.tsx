import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Banner from "~/components/core/banner/banner";
import HomeSearch from "~/components/core/home-search/home-search";
import SectionArtists from "~/components/core/section-artists/section-artists";
import SectionInfo from "~/components/core/section-info/section-info";
import { CartContext } from "~/context/cart";

export const useArts = routeLoader$(async () => {
  const url = new URL(
    `/api/1/product/artsFromHome`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const arts = (await res.json()) as any;
  return arts;
});

export default component$(() => {
  const cart = useStore({
    products: [],
    numberProducts: 0,
  });
  useContextProvider(CartContext, cart);
  const getArts = useArts();
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "grid",
        }}
      >
        <Banner />
        {/* Variable: {import.meta.env.VITE_URL_BACKEND}
        Type: {typeof import.meta.env.VITE_URL_BACKEND} */}
        <HomeSearch />
        {/* <SectionProducts /> */}
        <SectionArtists arts={getArts.value.arts} />
      </div>

      <SectionInfo />
    </>
  );
});
