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
        <div>
          <select class={style["search-header-select"]} name="" id="">
            <option value="">Most Popular</option>
            <option value="">Price: High-Low</option>
            <option value="">Price: Low-High</option>
          </select>
        </div>
      </div>
    </>
  );
});
