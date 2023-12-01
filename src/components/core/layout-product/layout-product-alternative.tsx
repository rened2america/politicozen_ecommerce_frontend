import {
  component$,
  $,
  useContext,
  //   useTask$,
  //   useStore,
  useSignal,
} from "@builder.io/qwik";
import style from "./layout-product.module.css";
import { Preview } from "../preview/preview";
import { CartContext } from "~/context/cart";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
// import { Image } from "@unpic/qwik";
import CardArt from "../card-art/card-art";

export default component$((props: any) => {
  const cartList = useContext(CartContext);
  //   const newProduct = useStore({
  //     product: {},
  //   });
  const changeColor = useSignal("");
  const changeProduct = useSignal("");
  const nav = useNavigate();
  const loc = useLocation();

  const addNewProductToCart = $(async () => {
    console.log("cartList", cartList.products);
    // const currentValue = props.product.design.find(
    //   (desing: any) =>
    //     desing.variant === loc.url.searchParams.get("variant") &&
    //     desing.size === loc.url.searchParams.get("size")
    // );

    const currentValue = props.currentDesign;
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

  //   const searchValueDesign = $(
  //     ({ product, url }: { product: any; url: any }) => {
  //       return product.design.find((desing: any) => desing.variant === url);
  //     }
  //   );

  return (
    <div class={style["product"]}>
      <div class={style["product-container"]}>
        {/* <Preview
          product={props.product.design.find(
            (desing: any) =>
              desing.variant === loc.url.searchParams.get("variant")
          )}
        /> */}
        {props.currentProduct && <Preview product={props.currentDesign} />}
        <div class={style["product-information"]}>
          <h1 class={style["title"]}>
            {props.currentProduct && props.currentProduct.title}
          </h1>
          <h2 class={style["tag"]}>
            {props.currentProduct &&
              props.currentProduct.tag.map((tag: any) => {
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
              //   href={`/artist/${props.product.artist.name.replace(
              //     / /g,
              //     "-"
              //   )}/?page=1`}
            >
              Rene Meza
            </Link>
          </h3>
          <h3 class={style["price"]}>
            ${props.currentProduct && props.currentDesign.price}
          </h3>
          <div class={style["size-content"]}>
            <div>Select Size</div>
            <div class={style["size-content-table"]}>
              {props.currentProduct
                ? props.currentProduct.sizes.map((size: any) => {
                    return (
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                        onClick$={() => {
                          const sizeSelect = size.value;
                          const variant =
                            loc.url.searchParams.get("variant") || "white";
                          const product = loc.url.searchParams.get("product");

                          const productId = loc.params.slug;
                          nav(
                            `/product/${productId}/?variant=${variant}&size=${sizeSelect}&product=${product}`
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
                        <label
                          style={{
                            cursor: "pointer",
                          }}
                          for="skuAndSize__29695257"
                          class="css-xf3ahq"
                        >
                          {size.value}
                        </label>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          {props.currentProduct && props.currentProduct.colors.length > 0 ? (
            <div class={style["color-container"]}>
              <div>Color</div>
              <div class={style["content-color"]}>
                {props.currentProduct
                  ? props.currentProduct.colors.map((color: any) => {
                      return (
                        <div
                          style={{
                            cursor: "pointer",
                          }}
                          onClick$={() => {
                            const variant = color.value.toLowerCase();
                            const size =
                              loc.url.searchParams.get("size") || "S";
                            const product = loc.url.searchParams.get("product");
                            const productId = loc.params.slug;
                            console.log("se ejecuto", variant);
                            changeColor.value = variant;
                            nav(
                              `/product/${productId}/?variant=${variant}&size=${size}&product=${product}`
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
                          <label
                            style={{
                              cursor: "pointer",
                            }}
                            for="skuAndSize__29695257"
                            class="css-xf3ahq"
                          >
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
              {props.currentProduct && props.currentProduct.description}
            </div>
          </div>
        </div>
        <div>
          {props.allProducts.map((product: any) => {
            return product.types.map((type: any) => {
              return (
                <div
                  style={{
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                  onClick$={() => {
                    const productType = type.value;
                    // const size = loc.url.searchParams.get("size") || "S";
                    const variant =
                      loc.url.searchParams.get("variant") || "white";
                    const productId = loc.params.slug;
                    console.log("se ejecuto", variant);

                    changeProduct.value = productType;
                    if (productType === "Mug") {
                      nav(
                        `/product/${productId}/?variant=white&size=11%20oz&product=${productType}`
                      );
                    } else {
                      nav(
                        `/product/${productId}/?variant=white&size=S&product=${productType}`
                      );
                    }
                  }}
                  class={[
                    style["content-value"],
                    type.value === loc.url.searchParams.get("product")
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
                  <label
                    style={{
                      cursor: "pointer",
                    }}
                    for="skuAndSize__29695257"
                    class="css-xf3ahq"
                  >
                    {type.value}
                  </label>
                </div>
              );
            });
          })}
        </div>
      </div>
      <div
        style={{
          fontSize: "20px",
          padding: "24px 0",
          fontWeight: "500",
        }}
      >
        Products Relation
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          gap: "24px",
        }}
      >
        {props?.groupRelation &&
          props.groupRelation.map((product: any) => {
            console.log(
              "esto esta en el array",
              product.product[0]?.types[0]?.value
            );
            return (
              <Link
                key={product.product[0].id}
                href={`/product/${product.product[0].id}/?variant=white&size=${
                  product.product[0].types.length > 0
                    ? product.product[0]?.types[0]?.value === "Mug"
                      ? "11 oz"
                      : "S"
                    : "S"
                }`}
              >
                <CardArt image={product} />
              </Link>
            );
          })}
      </div>
    </div>
  );
});
