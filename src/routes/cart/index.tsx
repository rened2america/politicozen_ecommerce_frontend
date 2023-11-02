import {
  component$,
  useContext,
  useResource$,
  useSignal,
} from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { CartContext } from "~/context/cart";

export default component$(() => {
  const cart = useContext(CartContext);
  const Buy = useSignal(false);
  console.log(cart.products);
  useResource$(async ({ track }) => {
    track(() => Buy.value);
    console.log("Buy.value", cart);
    if (Buy.value) {
      const getPayment = await fetch(
        import.meta.env.PUBLIC_URL_BACKEND + "/api/1/product/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            products: cart.products,
          }),
        }
      );
      const getPaymentParse = await getPayment.json();
      window.location.replace(getPaymentParse.session.url);
      console.log("getPaymentParse", getPaymentParse);
      Buy.value = false;
    }
  });

  if (cart?.products?.length === 0) {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "300px",
          fontSize: "32px",
          fontWeight: "500",
        }}
      >
        No Items in Cart
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {cart.products.map((product) => {
          console.log(product);
          return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "102px 1fr 96px 96px 96px",
                marginTop: "32px",
                borderRadius: "8px",
                border: "1px solid black",
                padding: "16px 24px",
                width: "600px",
                alignItems: "center",
                justifyItems: "center",
              }}
              key={product.priceId}
            >
              <Image src={product.url} width={96} height={83} />
              <div>{product.title}</div>
              <div>Quantity: {product.count} </div>
              <div>Color: {product.variant}</div>
              <div>Size: {product.size}</div>
            </div>
          );
        })}

        <div
          onClick$={() => {
            Buy.value = true;
          }}
          style={{
            padding: "8px 32px",
            backgroundColor: "black",
            color: "white",
            display: "grid",
            placeItems: "center",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            marginTop: "32px",
          }}
        >
          Buy
        </div>
      </div>
    </>
  );
});
