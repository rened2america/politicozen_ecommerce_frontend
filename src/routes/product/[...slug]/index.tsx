import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import LayoutProduct from "~/components/core/layout-product/layout-product";
import SearchOutOptions from "~/components/core/search-out-options/search-out-options";

export const useProductOneData = routeLoader$(async ({ params, query }) => {
  const variant = query.get("variant") || "";
  const size = query.get("size") || "";

  // const search = query.get("q") || "";
  const { slug } = params;

  const url = new URL(
    `/api/1/product/${slug}?variant=${variant}&size=${size}`,
    "http://localhost:4000"
  ); // Cambia la URL base según tu configuración
  const res = await fetch(url);
  const product = (await res.json()) as any;
  return product.products;
});

export default component$(() => {
  const { url } = useLocation();
  const term = url.searchParams.get("q") || "";
  const data = useProductOneData();

  return (
    <>
      <SearchOutOptions />
      <LayoutProduct product={data.value} />
    </>
  );
});
