import { component$ } from "@builder.io/qwik";
import HeaderLeft from "../header-left/header-left";
import HeaderRight from "../header-right/header-right";
import styles from "./header.module.css";
export default component$(() => {
  return (
    <>
      <header class={styles["header-container"]}>
        <div class={styles["header-left"]}>
          <HeaderLeft />
        </div>
        <div></div>
        <div class={styles["header-right"]}>
          <HeaderRight />
        </div>
      </header>
    </>
  );
});
