import {
  component$,
  $,
  useContext,
  //   useTask$,
  //   useStore,
  useSignal,
} from "@builder.io/qwik";
import style from "./layout-product.module.css";
import { CartContext } from "~/context/cart";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
// import { Image } from "@unpic/qwik";
import { Image } from "@unpic/qwik";
import ArrowRight from "~/components/primitives/Icons/arrowRight/arrowRight";
import Card from "../card-art/card-art";

export default component$((props: any) => {
  const cartList = useContext(CartContext);
  //   const newProduct = useStore({
  //     product: {},
  //   });
  const changeColor = useSignal("");
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
      title: props.currentProduct.title,
      url: currentValue.url,
      variant: currentValue.variant,
      price: currentValue.price,
      size: currentValue.size,
      artistId: currentValue.artistId,
    });
  });

  const sizeOrder = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
  const colorOrder = ["White", "Blue", "Beige", "Red", "Black"];

  return (
    <section class="py-16  px-0">
      <div class="flex justify-center item-center ">
        <div class="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div class="relative  h-80 md:h-[570px] lg:w-[500px] ">
            {props.currentDesign &&
              <div class="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={props.currentDesign.url}
                  alt="Product Image"
                  layout="fill"
                  class="object-cover w-full h-full"
                  width={2400}
                  height={3600}
                />
              </div>
            }
          </div>
          <div class="flex flex-col gap-4 lg:w-[450px] p-[1rem]">
            <h1 class="text-3xl font-semibold">{props.currentProduct && props.currentProduct.title}</h1>
            <p class="text-[16px] text-black font-medium">
              by             <Link
                class="cursor-pointer font-bold"
                href={`/artist/${props.groupProduct.artist.name.replace(
                  / /g,
                  "-"
                )}/?page=1`}
              >
                {props.groupProduct.artist.name}
              </Link>
            </p>
            <div class="border-b ">
              <p class="text-5xl pb-4 text-[#FFDA79] font-bold">${props.currentProduct && props.currentDesign.price}</p>
            </div>
            <div class="flex flex-col gap-5 w-full md:w-80 lg:w-96 flex-wrap">

              <div class="flex justify-between gap-3 flex-col lg:flex-row">
                <div class="flex flex-col w-full gap-2">
                  <p class="font-semibold text-lg ">Select Size</p>
                  <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-3 w-full font-semibold">
                    {props.currentProduct
                      ? props.currentProduct.sizes
                        .sort(
                          (a: any, b: any) =>
                            sizeOrder.indexOf(a.value) - sizeOrder.indexOf(b.value)
                        )
                        .map((size: any) => {
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
                                if (product === "Poster" || product === "Canvas") {
                                  nav(
                                    `/product/${productId}/?size=${sizeSelect}&product=${product}`
                                  );
                                }
                                nav(
                                  `/product/${productId}/?variant=${variant}&size=${sizeSelect}&product=${product}`
                                );
                              }}
                              class={[
                                style["content-value"],
                                size.value === loc.url.searchParams.get("size")
                                  ? "rounded-full py-2 bg-[#FFDA79] text-base shadow-[15px_10px_20px_-2px] shadow-slate-300"
                                  : "rounded-full py-2 border text-base font-medium text-[#636363] border-[#636363]",
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
              </div>
              {props.currentProduct.colors.length > 0 ? (
                <div>
                  <div class="flex flex-col w-full gap-2">
                    <p class="font-semibold text-lg">Select Color</p>
                    <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-2 w-full">
                      {props.currentProduct.colors
                        .sort(
                          (a: any, b: any) =>
                            colorOrder.indexOf(a.value) - colorOrder.indexOf(b.value)
                        )
                        .map((color: any) => {
                          return (
                            <button
                              style={{
                                cursor: "pointer",
                              }}
                              onClick$={() => {
                                const variant = color.value.toLowerCase();
                                const size = loc.url.searchParams.get("size") || "S";
                                const product = loc.url.searchParams.get("product");
                                const productId = loc.params.slug;
                                changeColor.value = variant;
                                nav(
                                  `/product/${productId}/?variant=${variant}&size=${size}&product=${product}`
                                );
                              }}
                              class={[
                                style["content-value"],
                                color.value.toLowerCase() ===
                                  loc.url.searchParams.get("variant")
                                  ? "rounded-full py-2 bg-[#FFDA79] text-base font-semibold shadow-[15px_10px_20px_-2px] shadow-slate-300"
                                  : "rounded-full py-2 text-base text-[#636363] border font-medium border-[#636363]",
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
                            </button>
                          );
                        })}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div class="my-6 bg-[#DDDDDD] h-[1px]" />

            <button
              onClick$={addNewProductToCart}
              class="flex justify-between items-center  bg-[#FFDA79] text-[#000000] font-semibold p-4 rounded-full w-auto shadow-[15px_10px_20px_-2px] shadow-slate-300">
              <span class="flex-grow">Add to Cart</span>
              <ArrowRight />
            </button>
            {props.currentProduct.description &&
              <div class="flex flex-col mt-10 gap-2 ">
                <h2 class="text-lg font-bold">
                  Description
                </h2>
                <p class="leading-6">
                  {props.currentProduct.description}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
      <div class="pt-32">
        <div class="flex justify-center items-center mb-[25px] relative z-[1] flex-col">
          <div class="flex mb-6">
            <p class=" md:text-[60px] font-bold text-[30px]">Products </p>
            <h2 class=" md:text-[60px] text-[#FFDA79] font-bold text-[30px] pl-2">
              Relation
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[1rem]">
            {props?.groupRelation && props.groupRelation.map((product: any, index: number) => (
              <Link
                class="flex justify-center cursor-pointer"
                key={product.product[0].id}
                href={`/product/${product.id}/?size=17"x25.5"&product=Poster`}
              >
                <Card
                  key={index}
                  imageSrc={product.urlImage}
                  title={product.name}
                />
              </Link>

            ))}
          </div>
        </div>
      </div>
    </section >
  );
});
