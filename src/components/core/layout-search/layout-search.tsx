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
        {props.result.value.map((product: any) => {
          return product.design.map((design: any) => {
            return (
              <Link
                key={design.id}
                href={`/politicozen/product/${product.id}/?variant=${design.variant}`}
              >
                <Card key={design.id} product={product} design={design} />
              </Link>
            );
          });
        })}
      </div>
    </div>
  );
});
