import { component$ } from "@builder.io/qwik";
import Search from "~/components/primitives/input/search/search";
import styles from "./home-search.module.css";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <div class={styles["home-search-container"]}>
      <Search />
      <div class={styles["group-search-buttons"]}>
        <Link href={`/search/?q=Trump`}>
          <div class={styles["button"]}>Trump</div>
        </Link>
        <Link href={`/search/?q=Creative`}>
          <div class={styles["button"]}>Creative</div>
        </Link>
        <Link href={`/search/?q=USA`}>
          <div class={styles["button"]}>USA</div>
        </Link>
        <Link href={`/search/?q=Army`}>
          <div class={styles["button"]}>Army</div>
        </Link>
        <Link href={`/search/?q=People`}>
          <div class={styles["button"]}>People</div>
        </Link>
      </div>
    </div>
  );
});
