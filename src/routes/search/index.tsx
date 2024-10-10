import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import LayoutSearch from "~/components/core/layout-search/layout-search";
import Pagination from "~/components/primitives/pagination/pagination";
import { FilterContext } from "~/context/filter";
import { generateStateFromUrlQuery } from "~/utils/generateStateFromUrlQuery";
import { Sidebar } from "./SideBar";
import CustomBanner from "~/components/core/custom-banner/custom-banner";

export const useProductData = routeLoader$(async ({ query }) => {
  console.log("--ok--");
  console.log(query);
  const search = query.get("q") || "";
  const sortByData = query.get("sortBy");
  const filtersData = query.get("filters");
  const page = query.get("page") || "";
  const filters = filtersData || "";
  const sortBy = sortByData || "";
  const searchTerm = search;
  //@ts-ignore
  const url = new URL("/api/1/product/all", import.meta.env.VITE_URL_BACKEND); // Cambia la URL base según tu configuración

  url.searchParams.append("filters", filters);
  url.searchParams.append("sortBy", sortBy);
  url.searchParams.append("search", searchTerm);
  url.searchParams.append("page", page);
  console.log("page", page);
  const res = await fetch(url);
  const product = (await res.json()) as any;

  console.log(product.products);
  return {
    products: product.products,
    count: product.count,
    search,
  };
});

export default component$(() => {
  const { url } = useLocation();
  // const term = url.searchParams.get("q") || "";
  const productData = useProductData();
  const filtersGlobalState = useContext(FilterContext);

  useTask$(async () => {
    const { filters, search } = generateStateFromUrlQuery(url);
    console.log(filters, search);
    filtersGlobalState.filters = filters;
    filtersGlobalState.search = search;
  });

  // const state = useStore({
  //   search: "",
  // });
  
//   const handleChange = $(function handleChange(e:any) {
//     state.search = e.target.value;
// // console.log(search, "search");
// });
// const handleClick = $(function handleClick() {
//   state.search = "";
// });

const sidebarData = {
  productTypes: [
    "Mug",
    "Sweatshirt",
    "Hoodie",
    "T-Shirt",
    "Canvas",
    "Poster",
  ],
  categories: ["Political", "Art", "Love", "Vex", "Misc", "Neo"],
  artists: [
    "Engin Selcuk",
    "Saman Torabi",
    "Wilfred Hildonen",
    "Jorge Sanchez Armas",
    "Ali Ghanaat",
  ],
};

  return (
    <>
      {/* <HeaderSearch searchText={term} /> */}
      <CustomBanner  enableSearch={true} header="Products"/>
      <section class="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div class="acma0 flex mb-[25px] relative z-[1] mx-auto justify-center p-[10px] ml-[11rem]">
        <Sidebar data={sidebarData} />
        <LayoutSearch result={productData} />
        </div>
        
        <Pagination count={productData.value.count} refNav="search" max={12} />
        </section>
    </>
  );
});