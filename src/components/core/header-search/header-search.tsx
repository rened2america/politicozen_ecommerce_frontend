import { component$ } from "@builder.io/qwik";
import style from "./header-search.module.css";
import Search from "~/components/primitives/input/search/search";

export default component$((props: any) => {
  return (
    <>
      <div class={style["header-search-container"]}>
        <div class={style["search-header-left-container"]}>
          <span class={style["search-result-text"]}>Search results</span>
          <span class={style["search-text"]}>{props.searchText}</span>
        </div>
        <Search />
        <div></div>
      </div>
    </>
  );
});
