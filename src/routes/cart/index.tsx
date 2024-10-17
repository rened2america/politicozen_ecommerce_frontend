import {
  component$,
  $,
  useContext,
} from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { CartContext } from "~/context/cart";

export default component$(() => {
  const cart = useContext(CartContext);

  const handleCheckout = $(async () => {
    if (cart.products.length === 0) {
      // Optionally handle empty cart scenario
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
        // Handle HTTP errors
        console.error("Failed to initiate payment:", getPayment.statusText);
        return;
      }

      const getPaymentParse = await getPayment.json();

      // Ensure window is available
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
            <div class="flex flex-col mt-4 md:mt-0 md:ml-6">
              <div class="text-lg font-semibold">{product.title}</div>
              <div>
                <div class="text-sm">Quantity: {product.count}</div>
                <div class="text-sm">Color: {product.variant}</div>
                <div class="text-sm">Size: {product.size}</div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick$={handleCheckout}
          class="mt-5 rounded-full p-2 bg-[#FFDA79] text-base shadow-[15px_10px_20px_-2px] shadow-slate-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
});
