import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Search from "~/components/primitives/input/search/search";
import styles from "./home-search.module.css";
import { Link } from "@builder.io/qwik-city";
import ArrowLeftFull from "~/components/primitives/Icons/arrowLeft/arrowLeftFull";
import ArrowRightFull from "~/components/primitives/Icons/arrowRight/arrowRightFull";
export default component$(() => {
  const refScroll = useSignal<Element>();
  const plus = useSignal(89);
  useVisibleTask$(({ track }) => {
    track(() => plus.value);
    if (refScroll.value) {
      const maxScroll =
        refScroll.value.scrollWidth - refScroll.value.clientWidth;
      const moveValue = (maxScroll: any, currentScroll: any) => {
        if (currentScroll >= maxScroll) {
          plus.value = maxScroll;
          return maxScroll;
        }
        if (currentScroll < 1) {
          plus.value = 0;
          return 0;
        }

        return currentScroll;
      };

      if (plus) {
        refScroll.value.scrollTo({
          left: moveValue(maxScroll, plus.value),
          behavior: "smooth",
        });
      }
    }
  });

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          minWidth: "300px",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          onClick$={() => (plus.value = plus.value - 60)}
        >
          <ArrowLeftFull />
        </div>

        <div class={styles["scroll-tags"]} ref={refScroll}>
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
        <div
          style={{
            cursor: "pointer",
          }}
          onClick$={() => (plus.value = plus.value + 60)}
        >
          <ArrowRightFull />
        </div>
      </div>
    </div>
  );
});
