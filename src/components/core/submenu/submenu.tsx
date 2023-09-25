import { component$ } from "@builder.io/qwik";
import styles from "./submenu.module.css";

export default component$(() => {
  return (
    <nav class={styles["submenu-container"]}>
      <ul class={styles["submenu-list"]}>
        <li>Collections</li>
        <li>Artists store</li>
      </ul>
    </nav>
  );
});
