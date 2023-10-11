import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import HeaderSearch from "~/components/core/header-search/header-search";
import LayoutSearch from "~/components/core/layout-search/layout-search";
import Pagination from "~/components/primitives/pagination/pagination";
import { FilterContext } from "~/context/filter";
import { generateStateFromUrlQuery } from "~/utils/generateStateFromUrlQuery";

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

  const url = new URL(
    "/api/1/product/all",
    "https://politicozen-backend.onrender.com"
  ); // Cambia la URL base según tu configuración

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
  const term = url.searchParams.get("q") || "";
  const productData = useProductData();
  const filtersGlobalState = useContext(FilterContext);

  useTask$(async () => {
    const { filters, search } = generateStateFromUrlQuery(url);
    console.log(filters, search);
    filtersGlobalState.filters = filters;
    filtersGlobalState.search = search;
  });

  return (
    <>
      <HeaderSearch searchText={term} />
      <Pagination count={productData.value.count} />
      <LayoutSearch result={productData} />
    </>
  );
});
