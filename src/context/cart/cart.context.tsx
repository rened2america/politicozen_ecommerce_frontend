import { createContextId } from "@builder.io/qwik";

export interface CartProductsListState {
  products: object[];
}

// export interface CartProductsListState {
//   name: string;
//   priceId: string;
// }

export const CartContext = createContextId<CartProductsListState>(
  "cart.product-context"
);
