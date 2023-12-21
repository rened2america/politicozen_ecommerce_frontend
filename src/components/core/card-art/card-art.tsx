import { component$ } from "@builder.io/qwik";
import styles from "./card-art.module.css";

export default component$((props: any) => {
  return (
    <div class={styles["image-container"]}>
      <img
        width="212"
        height="250"
        class={styles["image-container-img-rounded"]}
        src={props.image.urlImage}
        alt={props.image.name}
      />
      <div class={styles["backgroundImageText"]}>
        <div class={styles["img-container-text"]}>{props.image.name}</div>
      </div>
    </div>
  );
  // return (
  //   <div class={style.card}>
  //     <img
  //       class={style["card-img"]}
  //       src={props.image.urlImage}
  //       alt="Avatar"
  //       width="250"
  //       height="250"
  //     />
  //     <h2
  //       style={{
  //         fontSize: "16px",
  //         fontWeight: "500",
  //       }}
  //     >
  //       {props.image.name}
  //     </h2>
  //   </div>
  // );
});
