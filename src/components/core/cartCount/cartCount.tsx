import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Basket } from "~/components/primitives/basket/basket";
import { CartContext } from "~/context/cart";


export default component$(() => {
    const cart = useContext(CartContext);

  return (
    <Link
      class="p-1.5  relative inline-flex items-center text-sm font-medium text-center text-black "
      href="/cart"
    >
        <Basket />
        {cart.numberProducts > 0 ? (
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">{cart.numberProducts}</div>
        ) : null}
    </Link>
  );
});