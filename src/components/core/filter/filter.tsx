import { component$, useSignal } from "@builder.io/qwik";
import style from "./filter.module.css";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const productTypeValue = useSignal<null | string>(null);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div class={style["nav-filter-container"]}>
        <div>
          <h1 class={style.title}>Product Type</h1>
          <div class={style["filter-list"]}>
            <label>
              <input
                name="productType"
                value="mug"
                type="radio"
                onChange$={(e) => {
                  productTypeValue.value = e.target.value;
                  // console.log(location.url.searchParams.get("filters"));
                  // const filters = location.url.searchParams.get("filters");
                  // if (filters) {
                  //   const filtersJs = JSON.parse(filters);
                  //   location.url.searchParams.append("filters", {
                  //     ...filtersJs,
                  //     type: e.target.value,
                  //   });
                  //   nav(location.url.search);
                  // }
                }}
              />
              <span>Mug</span>
            </label>
            <label>
              <input
                name="productType"
                value="poster"
                type="radio"
                onChange$={(e) => {
                  productTypeValue.value = e.target.value;
                }}
              />
              <span>Poster</span>
            </label>
            <label>
              <input
                name="productType"
                value="canvas"
                type="radio"
                onChange$={(e) => {
                  productTypeValue.value = e.target.value;
                }}
              />
              <span>Canvas</span>
            </label>
            <label>
              <input
                name="productType"
                value="shirt"
                type="radio"
                onChange$={(e) => {
                  productTypeValue.value = e.target.value;
                }}
              />
              <span>Shirt</span>
            </label>
          </div>
        </div>
        <div class={style["section"]}>
          <h1 class={style.title}>Theme</h1>
          <div class={style["filter-list"]}>
            <label>
              <input name="theme" type="radio" />
              <span>Politic</span>
            </label>
            <label>
              <input name="theme" type="radio" />
              <span>Rusia</span>
            </label>
            <label>
              <input name="theme" type="radio" />
              <span>China</span>
            </label>
          </div>
        </div>
        <div class={style["section"]}>
          <h1 class={style.title}>Artist</h1>
          <div class={style["filter-list"]}>
            <label>
              <input name="artist" type="radio" />
              <span>Alex Johnson</span>
            </label>
            <label>
              <input name="artist" type="radio" />
              <span>Jane Smith</span>
            </label>
            <label>
              <input name="artist" type="radio" />
              <span>John Doe</span>
            </label>
            <Link
              class={style["button-load-more"]}
              href={`/politicozen/artists`}
            >
              <div>Load more...</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});
