import { component$, $, useContext, useTask$ } from "@builder.io/qwik";
import style from "./layout-product.module.css";
import { Preview } from "../preview/preview";
import { CartContext } from "~/context/cart";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$((props: any) => {
  const cartList = useContext(CartContext);
  const nav = useNavigate();
  const loc = useLocation();
  useTask$(async () => {
    // A task without `track` any state effectively behaves like a `on mount` hook.
    console.log("Runs once when the component mounts in the server OR client.");
    console.log("nose", props.product);
  });

  const addNewProductToCart = $(async () => {
    console.log("cartList", cartList.products);
    //Verificar si ya existe el priceId
    const existPriceId = cartList.products.findIndex((product: any) => {
      console.log(
        "product.priceId ",
        product.priceId === props.product.design[0].priceId
      );
      return product.priceId === props.product.design[0].priceId;
    });
    console.log("existPriceId", existPriceId);
    if (existPriceId != -1) {
      cartList.products[existPriceId].count++;
      return;
    }
    cartList.products.push({
      priceId: props.product.design[0].priceId,
      count: 1,
      title: props.product.title,
      url: props.product.design[0].url,
      variant: props.product.design[0].variant,
      price: props.product.design[0].price,
      size: props.product.design[0].size,
      artistId: props.product.design[0].artistId,
    });
    cartList.numberProducts++;

    console.log(cartList.products);
  });

  return (
    <div class={style["product"]}>
      <div class={style["product-container"]}>
        <Preview product={props.product} />

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
                            nav(
                              `/product/${productId}/?variant=${variant}&size=${size}`
                            );
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
