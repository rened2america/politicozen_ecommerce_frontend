import { component$ } from "@builder.io/qwik";
import style from "./search-out-options.module.css";
import Search from "~/components/primitives/input/search/search";

export default component$(() => {
  return (
    <>
      <div class={style["header-search-container"]}>
        <Search />
      </div>
    </>
  );
});
