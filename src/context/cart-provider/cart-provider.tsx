import {
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
  Slot,
} from '@builder.io/qwik';
import { CartContext, CartProductsListState } from '~/context/cart';

export const CartProvider = component$(() => {
  // Initialize the cart store with default values
  const cartStore = useStore<CartProductsListState>({
    products: [],
    numberProducts: 0,
  });

  // Provide the cart store context to child components
  useContextProvider(CartContext, cartStore);

  // Load cart data from localStorage when the component is mounted
  useVisibleTask$(() => {
    if (typeof localStorage !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        cartStore.products = parsedCart.products;
        cartStore.numberProducts = parsedCart.numberProducts;
      }
    }
  });

  // Persist cart data to localStorage whenever it changes
  useVisibleTask$(({ track }) => {
    track(() => cartStore.products);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartStore));
    }
  });

  return <Slot />;
});
