import {
  // $,
  component$,
  useContext,
  // useTask$,
  // useVisibleTask$,
} from "@builder.io/qwik";
import style from "./filter.module.css";
import {
  Link,
  // routeLoader$,
  useNavigate,
} from "@builder.io/qwik-city";
import "./filter.css";
import { FilterContext } from "~/context/filter";
import { generateUrlQuery } from "~/utils/generateUrlQuery";
// import { Checkbox } from "~/components/primitives/checkbox/checkbox";
export default component$(() => {
  const nav = useNavigate();
  const filters = useContext(FilterContext);
  // useVisibleTask$(({ track }) => {
  //   track(() => data.value);
  //   console.log("data.value", data.value);
  //   const filtersParams = location.url.searchParams.get("filters");
  //   const pageParams = location.url.searchParams.get("page")
  //     ? `&page=${location.url.searchParams.get("page")}`
  //     : "";
  //   const searchParams = location.url.searchParams.get("q");
  //   console.log("entro al data.value", filtersParams);
  //   if (filtersParams) {
  //     console.log("entro al searchParams.filtersParams");

  //     const filtersParamsParse = JSON.parse(filtersParams);
  //     const newfiltersParams = { ...filtersParamsParse, type: ["mug"] };
  //     const encodeNewfiltersParams = encodeURI(newfiltersParams);
  //     navigation(
  //       `/search/?q=${searchParams}&filters=${encodeNewfiltersParams}${pageParams}`
  //     );
  //   } else {
  //     console.log("se ejecuto");
  //     navigation(`/search/?q=${searchParams}${pageParams}`);
  //   }
  // });

  // const verifyCheckbox = $(async (type: string, value: string) => {
  //   console.log("edsds");
  //   const filters = location.url.searchParams.get("filters");
  //   if (!filters) {
  //     return false;
  //   }
  //   const filtersParse = JSON.parse(filters);
  //   console.log("filtersParse", filtersParse);
  //   if (
  //     type === "type" &&
  //     Object.prototype.hasOwnProperty.call(filtersParse, "type")
  //   ) {
  //     const findType = filtersParse.type.find(
  //       (filter: any) => filter === value
  //     );
  //     return findType ? true : false;
  //   }

  //   if (
  //     type === "tag" &&
  //     Object.prototype.hasOwnProperty.call(filtersParse, "tag")
  //   ) {
  //     const findType = filtersParse.type.find(
  //       (filter: any) => filter === value
  //     );
  //     return findType ? true : false;
  //   }
  //   console.log("va a retornar false");
  //   return false;
  // });
  console.log(filters?.filters?.artist);
  return (
    <>
      <div class={style["nav-filter-container"]}>
        <div>
          <h1 class={style.title}>Product Type</h1>
          <div class={style["filter-list"]}>
            {/* {verifyCheckbox("type", "mug")} */}
            <label class={style["label"]}>
              <input
                checked={
                  filters?.filters?.types?.find(
                    (typeValue) => typeValue === "Mug"
                  )
                    ? true
                    : false
                }
                name="productType"
                value="Mug"
                type="checkbox"
                onChange$={(e) => {
                  const newValue = e.target.value;
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "types"
                  );
                  console.log(newUri);
                  nav(`/search/${newUri}`);
                }}
              />
              <span>Mug</span>
            </label>
            <label class={style["label"]}>
              <input
                checked={
                  filters?.filters?.types?.find(
                    (typeValue: any) => typeValue === "Sweatshirt"
                  )
                    ? true
                    : false
                }
                name="productType"
                value="Sweatshirt"
                type="checkbox"
                onChange$={(e) => {
                  const newValue = e.target.value;
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "types"
                  );
                  console.log(newUri);
                  nav(`/search/${newUri}`);
                }}
              />
              <span>Sweatshirt</span>
            </label>
            <label class={style["label"]}>
              <input
                checked={
                  filters?.filters?.types?.find(
                    (typeValue) => typeValue === "Hoodie"
                  )
                    ? true
                    : false
                }
                name="productType"
                value="Hoodie"
                type="checkbox"
                onChange$={(e) => {
                  const newValue = e.target.value;
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "types"
                  );
                  nav(`/search/${newUri}`);
                }}
              />
              <span>Hoodie</span>
            </label>
            <label class={style["label"]}>
              <input
                checked={
                  filters?.filters?.types?.find(
                    (typeValue) => typeValue === "Shirt"
                  )
                    ? true
                    : false
                }
                name="productType"
                value="Shirt"
                type="checkbox"
                onChange$={(e) => {
                  const newValue = e.target.value;
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "types"
                  );
                  nav(`/search/${newUri}`);
                }}
              />
              <span>Shirt</span>
            </label>
          </div>
        </div>
        <div class={style["section"]}>
          <h1 class={style.title}>Theme</h1>
          <div class={style["filter-list"]}>
            <label class={style["label"]}>
              <input
                checked={
                  filters?.filters?.tag?.find(
                    (typeValue) => typeValue === "Political"
                  )
                    ? true
                    : false
                }
                onChange$={(e) => {
                  const newValue = e.target.value;
                  console.log("newValue", newValue);
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "tag"
                  );
                  nav(`/search/${newUri}`);
                }}
                value="Political"
                name="tag"
                type="checkbox"
              />
              <span>Political</span>
            </label>
            <label class={style["label"]}>
              <input
                checked={
                  filters?.filters?.tag?.find(
                    (typeValue) => typeValue === "Trump"
                  )
                    ? true
                    : false
                }
                onChange$={(e) => {
                  const newValue = e.target.value;
                  console.log("newValue", newValue);
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "tag"
                  );
                  nav(`/search/${newUri}`);
                }}
                value="Trump"
                name="tag"
                type="checkbox"
              />
              <span>Trump</span>
            </label>
            <label class={style["label"]}>
              <input
                checked={
                  filters?.filters?.tag?.find(
                    (typeValue) => typeValue === "War"
                  )
                    ? true
                    : false
                }
                onChange$={(e) => {
                  const newValue = e.target.value;
                  console.log("newValue", newValue);
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "tag"
                  );
                  nav(`/search/${newUri}`);
                }}
                value="War"
                name="tag"
                type="checkbox"
              />
              <span>War</span>
            </label>
          </div>
        </div>
        <div class={style["section"]}>
          <h1 class={style.title}>Artist</h1>
          <div class={style["filter-list"]}>
            <label class={style["label"]}>
              <input
                onChange$={(e) => {
                  const newValue = e.target.value;
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "artist"
                  );
                  console.log(newUri);
                  nav(`/search/${newUri}`);
                }}
                checked={
                  filters?.filters?.artist?.find(
                    (typeValue: any) => typeValue.name === "Engin-Selcuk"
                  )
                    ? true
                    : false
                }
                value="Engin-Selcuk"
                name="artist"
                type="checkbox"
              />
              <span>Engin Selcuk</span>
            </label>
            <label class={style["label"]}>
              <input
                onChange$={(e) => {
                  const newValue = e.target.value;
                  const newUri = generateUrlQuery(
                    filters.filters,
                    filters.search,
                    newValue,
                    "artist"
                  );
                  nav(`/search/${newUri}`);
                }}
                checked={
                  filters?.filters?.artist?.find((typeValue: any) => {
                    return typeValue.name === "Saman-Torabi";
                  })
                    ? true
                    : false
                }
                value="Saman-Torabi"
                name="artist"
                type="checkbox"
              />
              <span>Saman Torabi</span>
            </label>
            <Link class={style["button-load-more"]} href={`/artists`}>
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                Load more...
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});
