import { component$ } from "@builder.io/qwik";
// import style from "./layout-search.module.css";
// import Filter from "../filter/filter";
import { Link } from "@builder.io/qwik-city";
import { Card } from "~/routes/search/Card";

export default component$((props: any) => {
  return (
    <>
      {/* <Filter /> */}
      <div class="acma p-5 pl-[3rem] pt-0 grid gap-6 custom-scrollbar overflow-y-auto">

        {props.result.value.products && props.result.value.products.length > 0
          ? props.result.value.products.map((product: any) => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.group.id}/?${product?.types[0]?.value === "Poster" ||
                    product?.types[0]?.value === "Canvas"
                    ? ""
                    : "variant=white&"
                  }size=${product.types.length > 0
                    ? product?.types[0]?.value === "Mug"
                      ? "11 oz"
                      : product?.types[0]?.value === "Poster"
                        ? `17"x25.5"`
                        : product?.types[0]?.value === "Canvas"
                          ? `11"x14"`
                          : "S"
                    : "S"
                  }&product=${product?.types[0]?.value}`}
                  class={"cursor-pointer"}
              >
                <div
                  class={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-[270px] h-[390px]`}
                >
                  <Card
                    imageSrc={product.design[0].url}
                    title={product.title}
                    price={product.price}
                  />
                </div>
              </Link>
              // </div>
              // <Card product={product} className={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-[270px] h-[390px]`} />
            );
          })
          : null}
      </div>
    </>
  );
});