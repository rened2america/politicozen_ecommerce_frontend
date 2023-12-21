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
    </div>
  );
});
