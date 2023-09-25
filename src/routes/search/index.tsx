import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import HeaderSearch from "~/components/core/header-search/header-search";
import Header from "~/components/core/header/header/header";
import LayoutSearch from "~/components/core/layout-search/layout-search";
import Submenu from "~/components/core/submenu/submenu";

export const useProductData = routeLoader$(async ({ query }) => {
  const search = query.get("q") || "";
  const sortByData = query.get("sortBy");
  const filtersData = query.get("filters");

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
  console.log(url);
  const res = await fetch(url);
  const product = (await res.json()) as any;
  console.log("se ejecuto", product);
  return product.products;
});

export default component$(() => {
  const { url } = useLocation();
  const term = url.searchParams.get("q") || "";
  const productData = useProductData();

  return (
    <>
      <HeaderSearch searchText={term} />
      <LayoutSearch result={productData} />
    </>
  );
});
