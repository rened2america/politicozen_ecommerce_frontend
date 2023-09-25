import { component$ } from "@builder.io/qwik";
import styles from "./section-info.module.css";
import SectionImg from "../../../../public/section-info/img1.png";

export default component$(() => {
  return (
    <div class={styles["section-info-container"]}>
      <div class={styles["section-info-container-left"]}>
        <div class={styles["section-info-container-left-title"]}>
          Start Earning with Politicozen
        </div>
        <div class={styles["section-info-container-left-text"]}>
          We bring you some steps to follow to continue your journey as an
          Artist here with us.
        </div>
        <button class={styles.join}>Join</button>
      </div>
      <div class={styles["section-info-container-right"]}>
        <img src={SectionImg} alt="" />
      </div>
    </div>
  );
});
