import {
  component$,
  Slot,
  useStore,
  useContextProvider,
} from "@builder.io/qwik";

import Header from "~/components/core/header/header/header";
import { Footer } from "~/components/core/footer/footer";
import { CartContext, CartProductsListState } from "~/context/cart";
import { FilterContext, filterProductState } from "~/context/filter";
import { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const theme = useStore<CartProductsListState>({
    products: [],
    numberProducts: 0,
  });

  const filter = useStore<filterProductState>({
    filters: {
      types: [],
      tag: [],
      artist: [],
    },
    numberPage: 1,
    currentPage: 1,
    search: "",
  });

  useContextProvider(CartContext, theme);
  useContextProvider(FilterContext, filter);

  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
