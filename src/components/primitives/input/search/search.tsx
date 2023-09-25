import { component$ } from "@builder.io/qwik";
import styles from "./search.module.css";
import { HiMagnifyingGlassMini } from "@qwikest/icons/heroicons";
export default component$(() => {
  return (
    <form action="/politicozen/search">
      <div class={styles["input-search-container"]}>
        <div class={styles["icon-search"]}>
          <HiMagnifyingGlassMini />
        </div>
        <input
          class={styles["input-search"]}
          type="search"
          placeholder="Search all artist or products"
          name="q"
          default-value={""}
        />
      </div>
    </form>
  );
});
