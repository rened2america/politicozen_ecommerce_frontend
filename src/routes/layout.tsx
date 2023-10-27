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
    <div
      style={{
        padding: "",
      }}
    >
      <Header />
      <Slot />
      <Footer />
    </div>
  );
});
