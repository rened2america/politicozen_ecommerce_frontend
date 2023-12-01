import { component$, $, useTask$, useSignal } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
// import LayoutProduct from "~/components/core/layout-product/layout-product";
import LayoutProductAlternative from "~/components/core/layout-product/layout-product-alternative";
import SearchOutOptions from "~/components/core/search-out-options/search-out-options";

export const useProductOneData = routeLoader$(async ({ params, query }) => {
  const variant = query.get("variant") || "";
  const size = query.get("size") || "";

  // const search = query.get("q") || "";
  const { slug } = params;
  console.log("useProductOneData se ejecuto");
  const url = new URL(
    `/api/1/product/${slug}?variant=${variant}&size=${size}`,
    import.meta.env.VITE_URL_BACKEND
  ); // Cambia la URL base según tu configuración
  const res = await fetch(url);
  const product = (await res.json()) as any;
  console.log(product);
  return product.products;
});

export const useGropRelation = routeLoader$(async () => {
  const url = new URL(
    `/api/1/product/groupRelation`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const product = (await res.json()) as any;
  return product.groupRelation;
});

export default component$(() => {
  const data = useProductOneData();
  const groupRelation = useGropRelation();
  const loc = useLocation();
  const currentDesign = useSignal(null);
  const currentProduct = useSignal(null);

  const searchValueProduct = $(({ products }: { products: any }) => {
    console.log(products);
    const currentProduct = products.find((product: any) => {
      return product.types[0].value === loc.url.searchParams.get("product");
    });

    if (currentProduct) {
      const currentDesign = currentProduct.design.find((design: any) => {
        console.log(design.variant);
        console.log(design.size);
        console.log(loc.url.searchParams.get("variant"));
        console.log(loc.url.searchParams.get("size"));
        console.log(design.variant === loc.url.searchParams.get("variant"));
        console.log(design.size === loc.url.searchParams.get("size"));

        return (
          design.variant === loc.url.searchParams.get("variant") &&
          design.size === loc.url.searchParams.get("size")
        );
      });

      return {
        currentDesign,
        currentProduct,
      };
    }
    return {
      currentDesign: products[0].design[0],
      currentProduct: products[0],
    };
  });

  useTask$(async ({ track }) => {
    track(() => loc.url.searchParams.get("variant"));
    track(() => loc.url.searchParams.get("size"));
    searchValueProduct({
      products: data.value.product,
    }).then((res) => {
      currentDesign.value = res.currentDesign;
      currentProduct.value = res.currentProduct;
    });
  });

  console.log(data.value.product);
  return (
    <>
      <SearchOutOptions />
      <LayoutProductAlternative
        currentDesign={currentDesign.value}
        currentProduct={currentProduct.value}
        groupRelation={groupRelation.value}
        allProducts={data.value.product}
      />
      {/* <LayoutProduct product={data.value} groupRelation={groupRelation.value} /> */}
    </>
  );
});
