import { component$ } from "@builder.io/qwik";
import styles from "./submenu.module.css";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <nav class={styles["submenu-container"]}>
      <ul class={styles["submenu-list"]}>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick$={() => {
            nav("/categories");
          }}
        >
          Categories
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick$={() => {
            nav("/artists");
          }}
        >
          Artists
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick$={() => {
            nav("/how-it-works");
          }}
        >
          How it works
        </li>
      </ul>
    </nav>
  );
});
