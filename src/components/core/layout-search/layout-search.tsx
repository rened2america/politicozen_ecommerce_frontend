import { component$ } from "@builder.io/qwik";
import style from "./layout-search.module.css";
import Filter from "../filter/filter";
import Card from "../card/card";
import { Link } from "@builder.io/qwik-city";

export default component$((props: any) => {
  return (
    <div class={style["search-container"]}>
      <Filter />
      <div class={style["products-container"]}>
        {props.result.value.products && props.result.value.products.length > 0
          ? props.result.value.products.map((product: any) => {
              return (
                <Link
                  key={product.id}
                  href={`/product/${product.group.id}/?${
                    product?.types[0]?.value === "Poster" ||
                    product?.types[0]?.value === "Canvas"
                      ? ""
                      : "variant=white&"
                  }size=${
                    product.types.length > 0
                      ? product?.types[0]?.value === "Mug"
                        ? "11 oz"
                        : product?.types[0]?.value === "Poster"
                        ? `17"x25.5"`
                        : product?.types[0]?.value === "Canvas"
                        ? `11"x14"`
                        : "S"
                      : "S"
                  }&product=${product?.types[0]?.value}`}
                >
                  <Card product={product} />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
});
