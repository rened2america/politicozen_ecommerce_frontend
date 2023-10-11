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
    "https://politicozen-backend.onrender.com"
  ); // Cambia la URL base según tu configuración
  const res = await fetch(url);
  const product = (await res.json()) as any;
  console.log(product);
  return product.products;
});

export const usePayment = routeLoader$(async (price) => {
  console.log(price);
  // const session = await fetch("https://politicozen-backend.onrender.com/api/1/product/payment", {
  //   method: "POST",
  //   body: JSON.stringify(price),
  // });
  const session = "dsdsddsadsad";

  return session;
});

export default component$(() => {
  const { url } = useLocation();
  const term = url.searchParams.get("q") || "";
  const data = useProductOneData();

  console.log(term);
  return (
    <>
      <SearchOutOptions />
      <LayoutProduct product={data.value} />
    </>
  );
});
