import { createContextId } from "@builder.io/qwik";

export type Product = {
  priceId: string;
  count: number;
  title: string;
  url: string;
  variant: string;
  price: string;
  size: string;
  artistId: number;
};
export interface CartProductsListState {
  products: Product[];
  numberProducts: number;
}

// export interface CartProductsListState {
//   name: string;
//   priceId: string;
// }

export const CartContext = createContextId<CartProductsListState>(
  "cart.product-context"
);
