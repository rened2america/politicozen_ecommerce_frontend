import { component$ } from "@builder.io/qwik";
import styles from "./banner.module.css";
export default component$(() => {
  return <div class={styles["banner-image"]} />;
});
