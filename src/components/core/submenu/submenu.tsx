import { component$ } from "@builder.io/qwik";
import styles from "./submenu.module.css";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <nav class={styles["submenu-container"]}>
      <ul class={styles["submenu-list"]}>
        <li
          onClick$={() => {
            nav("/search/?q=");
          }}
        >
          Collections
        </li>
        <li
          onClick$={() => {
            nav("/artists");
          }}
        >
          Artists store
        </li>
      </ul>
    </nav>
  );
});
