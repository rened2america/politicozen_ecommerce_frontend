import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { Footer } from "~/components/core/footer/footer";
// import HeaderSearch from "~/components/core/header-search/header-search";
import Header from "~/components/core/header/header/header";
import LayoutProduct from "~/components/core/layout-product/layout-product";
import SearchOutOptions from "~/components/core/search-out-options/search-out-options";
import Submenu from "~/components/core/submenu/submenu";

export const useProductOneData = routeLoader$(async ({ params, query }) => {
  const variant = query.get("variant") || "";
  console.log("variant", variant);
  // const search = query.get("q") || "";
  console.log("urldata", params);
  const { slug } = params;

  const url = new URL(
    `/api/1/product/${slug}?variant=${variant}`,
    "https://politicozen-backend.onrender.com"
  ); // Cambia la URL base según tu configuración
  console.log(url);
  const res = await fetch(url);
  const product = (await res.json()) as any;
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
      <Header />
      <Submenu />
      <SearchOutOptions />
      <LayoutProduct product={data.value} />
      <Footer />
    </>
  );
});
