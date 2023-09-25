import { component$ } from "@builder.io/qwik";
import styles from "./section-suscribe.module.css";

export default component$(() => {
  return (
    <div class={styles["section-suscribe"]}>
      <div class={styles["section-suscribe-container"]}>
        <div class={styles["section-suscribe-container-title"]}>Suscribe</div>
        <div class={styles["section-suscribe-content"]}>
          <div class={styles["section-suscribe-content-input"]}>
            <input
              class={styles["input-search"]}
              type="email"
              placeholder="email"
            />
          </div>
          <button class={styles["section-suscribe-content-button"]}>
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
});
