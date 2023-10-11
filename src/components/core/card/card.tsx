import { component$ } from "@builder.io/qwik";
import style from "./card.module.css";

export default component$((props: any) => {
  return (
    <div class={style.card}>
      <img
        class={style["card-img"]}
        src={props.product.design[0].url}
        alt="Avatar"
        width="320"
        height="320"
      />
      <div class={style.container}>
        <h4 class={style["title"]}>{props.product.title}</h4>
        <h5 class={style["subtitle"]}>{props.product.subtitle}</h5>
        <span class={style["price"]}>${props.product.price}</span>
      </div>
    </div>
  );
});
