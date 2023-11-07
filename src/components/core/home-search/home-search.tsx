import { component$ } from "@builder.io/qwik";
import Search from "~/components/primitives/input/search/search";
import styles from "./home-search.module.css";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <div class={styles["home-search-container"]}>
      <Search />
      <div
        style={{
          fontSize: "48px",
          color: "#1b1b1b",
          fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          margin: "24px 0",
          textAlign: "center",
        }}
      >
        Trending Topics
      </div>
      <div class={styles["group-search-buttons"]}>
        <Link href={`/search/?q=Trump`}>
          <div class={styles["button"]}>Trump</div>
        </Link>
        <Link href={`/search/?q=Crypto`}>
          <div class={styles["button"]}>Crypto</div>
        </Link>
        <Link href={`/search/?q=War`}>
          <div class={styles["button"]}>War</div>
        </Link>
        <Link href={`/search/?q=Cartoon`}>
          <div class={styles["button"]}>Cartoon</div>
        </Link>
        <Link href={`/search/?q=Ukraine`}>
          <div class={styles["button"]}>Ukraine</div>
        </Link>
      </div>
    </div>
  );
});
