import {
  component$,
  $,
  useContext,
  useTask$,
  useStore,
  useSignal,
} from "@builder.io/qwik";
import style from "./layout-product.module.css";
import { Preview } from "../preview/preview";
import { CartContext } from "~/context/cart";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$((props: any) => {
  const cartList = useContext(CartContext);
  const newProduct = useStore({
    product: {},
  });
  const changeColor = useSignal("");
  const nav = useNavigate();
  const loc = useLocation();

  const addNewProductToCart = $(async () => {
    console.log("cartList", cartList.products);
    const currentValue = props.product.design.find(
      (desing: any) =>
        desing.variant === loc.url.searchParams.get("variant") &&
        desing.size === loc.url.searchParams.get("size")
    );
    console.log("currentValue", currentValue);
    console.log("hola");

    //Verificar si ya existe el priceId
    const existPriceId = cartList.products.findIndex((product: any) => {
      console.log("product.priceId ", product.priceId === currentValue.priceId);
      return product.priceId === currentValue.priceId;
    });
    console.log("existPriceId", existPriceId);
    cartList.numberProducts++;

    if (existPriceId != -1) {
      cartList.products[existPriceId].count++;
      return;
    }

    cartList.products.push({
      priceId: currentValue.priceId,
      count: 1,
      title: props.product.title,
      url: currentValue.url,
      variant: currentValue.variant,
      price: currentValue.price,
      size: currentValue.size,
      artistId: currentValue.artistId,
    });

    console.log(cartList.products);
  });

  const searchValueDesign = $(
    ({ product, url }: { product: any; url: any }) => {
      return product.design.find((desing: any) => desing.variant === url);
    }
  );

  useTask$(async ({ track }) => {
    track(() => loc.url.searchParams.get("variant"));
    searchValueDesign({
      product: props.product,
      url: loc.url.searchParams.get("variant"),
    }).then((res) => {
      newProduct.product = res;
      console.log("resl", res);
    });
    // A task without `track` any state effectively behaves like a `on mount` hook.
    console.log("Runs once when the component mounts in the server OR client.");
  });

  console.log(props.product);

  return (
    <div class={style["product"]}>
      <div class={style["product-container"]}>
        {/* <Preview
          product={props.product.design.find(
            (desing: any) =>
              desing.variant === loc.url.searchParams.get("variant")
          )}
        /> */}
        <Preview product={newProduct.product} />

        <div class={style["product-information"]}>
          <h1 class={style["title"]}>{props.product.title}</h1>
          <h2 class={style["tag"]}>
            {props.product.tag.map((tag: any) => {
              return (
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "8px",
                    padding: "8px 16px",
                  }}
                  key={tag.id}
                >
                  {tag.value}
                </div>
              );
            })}
          </h2>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                fontWeight: "500",
              }}
            >
              by
            </span>{" "}
            <Link
              style={{
                cursor: "pointer",
              }}
              href={`/artist/${props.product.artist.name.replace(
                / /g,
                "-"
              )}/?page=1`}
            >
              {props.product.artist.name}
            </Link>
          </h3>
          <h3 class={style["price"]}>${props.product.design[0].price}</h3>
          <div class={style["size-content"]}>
            <div>Select Size</div>
            <div class={style["size-content-table"]}>
              {props.product
                ? props.product.sizes.map((size: any) => {
                    return (
                      <div
                        onClick$={() => {
                          const sizeSelect = size.value;
                          const variant =
                            loc.url.searchParams.get("variant") || "white";
                          const productId = loc.params.slug;
                          nav(
                            `/product/${productId}/?variant=${variant}&size=${sizeSelect}`
                          );
                        }}
                        class={[
                          style["content-value"],
                          size.value === loc.url.searchParams.get("size")
                            ? style["img-border"]
                            : "",
                        ]}
                      >
                        <input
                          name="skuAndSize"
                          type="radio"
                          class={style["visually-hidden"]}
                          value="29695257:XS"
                        />
                        <label for="skuAndSize__29695257" class="css-xf3ahq">
                          {size.value}
                        </label>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          {props.product.colors.length > 0 ? (
            <div class={style["color-container"]}>
              <div>Color</div>
              <div class={style["content-color"]}>
                {props.product
                  ? props.product.colors.map((color: any) => {
                      return (
                        <div
                          onClick$={() => {
                            const variant = color.value.toLowerCase();
                            const size =
                              loc.url.searchParams.get("size") || "S";
                            const productId = loc.params.slug;
                            console.log("se ejecuto", variant);
                            changeColor.value = variant;
                            nav(
                              `/product/${productId}/?variant=${variant}&size=${size}`
                            );
                            // nav(
                            //   `/product/${productId}/?variant=${variant}&size=${size}`
                            // );
                          }}
                          class={[
                            style["content-value"],
                            color.value.toLowerCase() ===
                            loc.url.searchParams.get("variant")
                              ? style["img-border"]
                              : "",
                          ]}
                        >
                          <input
                            name="skuAndSize"
                            type="radio"
                            class={style["visually-hidden"]}
                            value="29695257:XS"
                          />
                          <label for="skuAndSize__29695257" class="css-xf3ahq">
                            {color.value}
                          </label>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          ) : null}
          <button
            onClick$={addNewProductToCart}
            class={style["button-add-cart"]}
          >
            Add to cart
          </button>
          <div class={style["description-container"]}>
            <div class={style["description-title"]}>Description</div>
            <div class={style["description-content"]}>
              {props.product.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
