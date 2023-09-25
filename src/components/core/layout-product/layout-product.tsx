import { component$, useSignal } from "@builder.io/qwik";
import style from "./layout-product.module.css";
import { Preview } from "../preview/preview";
import { Image } from "@unpic/qwik";

export default component$((props: any) => {
  const radioColorValue = useSignal<any>(null);
  const radioSizeValue = useSignal<any>(null);

  // const addNewProductToCart = $(async () => {
  //   const data = {
  //     priceId: props.product.design[0].priceId,
  //   };
  //   console.log(data);
  //   console.log("props.product.design[0]", props.product.design[0]);
  //   const session = await fetch("https://politicozen-backend.onrender.com/api/1/product/payment", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });

  //   const res = session.json();
  //   console.log(res);
  // });

  return (
    <div class={style["product"]}>
      <div class={style["product-container"]}>
        <Preview product={props.product} />

        <div class={style["product-information"]}>
          <h1 class={style["title"]}>{props.product.title}</h1>
          <h2 class={style["subtitle"]}>{props.product.subtitle}</h2>
          <h3 class={style["price"]}>${props.product.design[0].price}</h3>
          <div class={style["size-content"]}>
            <div>Select Size</div>
            <div class={style["size-content-table"]}>
              <div
                onClick$={() => {
                  radioSizeValue.value = "S";
                }}
                class={[
                  style["content-value"],
                  "S" === radioSizeValue.value ? style["img-border"] : "",
                ]}
              >
                <input
                  name="skuAndSize"
                  type="radio"
                  class={style["visually-hidden"]}
                  value="29695257:XS"
                />
                <label for="skuAndSize__29695257" class="css-xf3ahq">
                  S
                </label>
              </div>
              <div
                onClick$={() => {
                  radioSizeValue.value = "M";
                }}
                class={[
                  style["content-value"],
                  "M" === radioSizeValue.value ? style["img-border"] : "",
                ]}
              >
                <input
                  name="skuAndSize"
                  type="radio"
                  class={style["visually-hidden"]}
                  value="29695257:XS"
                />
                <label for="skuAndSize__29695257" class="css-xf3ahq">
                  M
                </label>
              </div>
              <div
                onClick$={() => {
                  radioSizeValue.value = "L";
                }}
                class={[
                  style["content-value"],
                  "L" === radioSizeValue.value ? style["img-border"] : "",
                ]}
              >
                <input
                  name="skuAndSize"
                  type="radio"
                  class={style["visually-hidden"]}
                  value="29695257:XS"
                />
                <label for="skuAndSize__29695257" class="css-xf3ahq">
                  L
                </label>
              </div>
              <div
                onClick$={() => {
                  radioSizeValue.value = "XL";
                }}
                class={[
                  style["content-value"],
                  "XL" === radioSizeValue.value ? style["img-border"] : "",
                ]}
              >
                <input
                  name="skuAndSize"
                  type="radio"
                  class={style["visually-hidden"]}
                  value="29695257:XS"
                />
                <label for="skuAndSize__29695257" class="css-xf3ahq">
                  XL
                </label>
              </div>
              <div
                onClick$={() => {
                  radioSizeValue.value = "XXL";
                }}
                class={[
                  style["content-value"],
                  "XXL" === radioSizeValue.value ? style["img-border"] : "",
                ]}
              >
                <input
                  name="skuAndSize"
                  type="radio"
                  class={style["visually-hidden"]}
                  value="29695257:XS"
                />
                <label for="skuAndSize__29695257" class="css-xf3ahq">
                  XXL
                </label>
              </div>
              <div
                onClick$={() => {
                  radioSizeValue.value = "XXXL";
                }}
                class={[
                  style["content-value"],
                  "XXXL" === radioSizeValue.value ? style["img-border"] : "",
                ]}
              >
                <input
                  name="skuAndSize"
                  type="radio"
                  class={style["visually-hidden"]}
                  value="29695257:XS"
                />
                <label for="skuAndSize__29695257" class="css-xf3ahq">
                  XXXL
                </label>
              </div>
            </div>
          </div>
          {props.product.type === "shirt" ? (
            <div class={style["color-container"]}>
              <div>Color</div>
              <div class={style["content-color"]}>
                <div
                  class={
                    style[
                      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0dc31a55-9438-439f-80cf-96749527804a/acg-mens-allover-print-trail-shorts-Hb1h6v.png" ===
                      radioColorValue.value
                        ? "img-border"
                        : ""
                    ]
                  }
                >
                  <input
                    name="skuAndSize"
                    type="radio"
                    class={style["visually-hidden"]}
                    value="29695257:XS"
                  />
                  <label
                    onClick$={() => {
                      radioColorValue.value =
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0dc31a55-9438-439f-80cf-96749527804a/acg-mens-allover-print-trail-shorts-Hb1h6v.png";
                    }}
                    for="skuAndSize__29695257"
                    class="css-xf3ahq"
                  >
                    <Image
                      src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0dc31a55-9438-439f-80cf-96749527804a/acg-mens-allover-print-trail-shorts-Hb1h6v.png"
                      layout="constrained"
                      width={58}
                      height={58}
                      alt="A lovely bath"
                    />
                  </label>
                </div>
                <div
                  class={
                    style[
                      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/b070f695-5549-477d-b676-c23f12ffea22/primary-mens-dri-fit-versatile-tank-RcQ41g.png" ===
                      radioColorValue.value
                        ? "img-border"
                        : ""
                    ]
                  }
                >
                  <input
                    name="skuAndSize"
                    type="radio"
                    class={style["visually-hidden"]}
                    value="29695257:XS"
                  />
                  <label
                    onClick$={() => {
                      radioColorValue.value =
                        "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/b070f695-5549-477d-b676-c23f12ffea22/primary-mens-dri-fit-versatile-tank-RcQ41g.png";
                    }}
                    for="skuAndSize__29695257"
                    class="css-xf3ahq"
                  >
                    <Image
                      src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/b070f695-5549-477d-b676-c23f12ffea22/primary-mens-dri-fit-versatile-tank-RcQ41g.png"
                      layout="constrained"
                      width={58}
                      height={58}
                      alt="A lovely bath"
                    />
                  </label>
                </div>
              </div>
            </div>
          ) : null}
          <button class={style["button-add-cart"]}>Add to cart</button>
          <div class={style["description-container"]}>
            <div class={style["description-title"]}>Description</div>
            <div class={style["description-content"]}>
              Pull on this versatile base layer and be ready for whatever the
              trail throws your way. It's designed to keep things light and
              breezy for effortless cool in warm conditions. Take it on the
              trail and don't let the heat slow you down.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
