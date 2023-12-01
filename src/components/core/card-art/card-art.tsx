import { component$ } from "@builder.io/qwik";
import style from "./card-art.module.css";

export default component$((props: any) => {
  return (
    <div class={style.card}>
      <img
        class={style["card-img"]}
        src={props.image.urlImage}
        alt="Avatar"
        width="250"
        height="250"
      />
      <h2
        style={{
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        {props.image.name}
      </h2>
    </div>
  );
});
