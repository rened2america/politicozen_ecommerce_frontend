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
                  href={`/product/${product.id}/?variant=white&size=${
                    product.types.length > 0
                      ? product?.types[0]?.value === "Mug"
                        ? "11 oz"
                        : "S"
                      : "S"
                  }`}
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
