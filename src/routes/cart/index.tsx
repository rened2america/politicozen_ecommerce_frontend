import {
  component$,
  $,
  useContext,
} from "@builder.io/qwik";
import { LuTrash, LuPlus, LuMinus } from "@qwikest/icons/lucide";
import { Image } from "@unpic/qwik";
import { CartContext } from "~/context/cart";

export default component$(() => {
  const cart = useContext(CartContext);

  // Function to remove an item entirely from the cart
  const removeFromCart = $((priceId: string) => {

    cart.products = cart.products.filter((product) => product.priceId !== priceId);
    cart.numberProducts = cart.products.reduce((acc, p) => acc + p.count, 0);
  });

  // Function to update item quantity
  const updateQuantity = $((priceId: string, increment: boolean) => {
    cart.products = cart.products.map(product => {
      if (product.priceId === priceId) {
        const newCount = increment ? product.count + 1 : Math.max(1, product.count - 1);
        return { ...product, count: newCount };
      }
      return product;
    });
    cart.numberProducts = cart.products.reduce((acc, p) => acc + p.count, 0);
  });

  const handleCheckout = $(async () => {
    if (cart.products.length === 0) {
      return;
    }

    try {
      const getPayment = await fetch(
        import.meta.env.VITE_URL_BACKEND + "/api/1/product/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products: cart.products,
          }),
        }
      );

      if (!getPayment.ok) {
        console.error("Failed to initiate payment:", getPayment.statusText);
        return;
      }

      const getPaymentParse = await getPayment.json();

      if (typeof window !== "undefined") {
        window.location.replace(getPaymentParse.session.url);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  });

  if (cart?.products?.length === 0) {
    return (
      <div style={{ backgroundImage: "url('/Banner.png')" }} class="flex items-center justify-center w-full h-72 text-2xl font-medium">
        No Items in Cart
      </div>
    );
  }

  return (
    <div class="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Banner.png')" }}>
      <div class="flex flex-col items-center py-8 px-4">
        {cart.products.map((product) => (
          <div
            class="flex flex-col md:flex-row items-center gap-5 mt-8 w-full max-w-4xl bg-white bg-opacity-75 rounded-lg border border-black p-4"
            key={product.priceId}
          >
            <div class="flex justify-center w-full md:w-24 md:h-24 flex-shrink-0">
              <Image
                class="object-cover w-full h-full"
                src={product.url}
                width={192}
                height={166}
              />
            </div>
            <div class="flex justify-between w-full h-full">
              <div class="flex flex-col gap-2 mt-4 md:mt-0 md:ml-6">
                <div class="text-lg font-semibold">{product.title}</div>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-4">
                    <div class="text-sm">Quantity:</div>
                    <div class="flex items-center gap-2">
                      <button
                        onClick$={() => updateQuantity(product.priceId, false)}
                        class="w-6 h-6 flex items-center justify-center rounded-full bg-[#FFDA79] text-base shadow-md hover:bg-[#FFE5A3] transition-colors"
                      >
                        <LuMinus class="w-3 h-3" />
                      </button>
                      <span class="w-8 text-center">{product.count}</span>
                      <button
                        onClick$={() => updateQuantity(product.priceId, true)}
                        class="w-6 h-6 flex items-center justify-center rounded-full bg-[#FFDA79] text-base shadow-md hover:bg-[#FFE5A3] transition-colors"
                      >
                        <LuPlus class="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  {product.variant ? <div class="text-sm">Color: {product.variant}</div> : ""}
                  {product.size ? <div class="text-sm">Size: {product.size}</div> : ""}
                </div>
              </div>

              <div class="h-full flex items-center">
                <button
                  onClick$={() => removeFromCart(product.priceId)}
                  class="w-fit h-fit rounded-full p-4 bg-[#FFDA79] text-base shadow-[15px_10px_20px_-2px] shadow-slate-300 hover:bg-[#FFE5A3] transition-colors"
                >
                  <LuTrash />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick$={handleCheckout}
          class="mt-5 rounded-full p-2 bg-[#FFDA79] text-base shadow-[15px_10px_20px_-2px] shadow-slate-300 hover:bg-[#FFE5A3] transition-colors"
        >
          Checkout
        </button>
      </div>
    </div>
  );
});