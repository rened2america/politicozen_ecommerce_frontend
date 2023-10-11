import { component$ } from "@builder.io/qwik";
import HeaderLeft from "../header-left/header-left";
import HeaderRight from "../header-right/header-right";
import styles from "./header.module.css";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  return (
    <>
      <header class={styles["header-container"]}>
        <div
          onClick$={() => {
            nav("/");
          }}
          class={styles["header-left"]}
        >
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
