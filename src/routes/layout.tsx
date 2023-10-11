import {
  component$,
  Slot,
  useStore,
  useContextProvider,
} from "@builder.io/qwik";

import Header from "~/components/core/header/header/header";
import Submenu from "~/components/core/submenu/submenu";
import { Footer } from "~/components/core/footer/footer";
import { CartContext, CartProductsListState } from "~/context/cart";
import { FilterContext, filterProductState } from "~/context/filter";

export default component$(() => {
  const theme = useStore<CartProductsListState>({
    products: [],
    numberProducts: 0,
  });

  const filter = useStore<filterProductState>({
    filters: {
      types: [],
      theme: [],
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
      <Submenu />
      <Slot />
      <Footer />
    </>
  );
});
