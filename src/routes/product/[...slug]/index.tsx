import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
// import LayoutProduct from "~/components/core/layout-product/layout-product";
import LayoutProductAlternative from "~/components/core/layout-product/layout-product-alternative";
import SearchOutOptions from "~/components/core/search-out-options/search-out-options";

export const useProductOneData = routeLoader$(async ({ params, query }) => {
  const variant = query.get("variant") || "";
  const size = query.get("size") || "";
  const productQuery = query.get("product") || "";
  const { slug } = params;
  const url = new URL(
    `/api/1/product/${slug}?variant=${variant}&size=${size}&product=${productQuery}`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const product = (await res.json()) as any;
  return product;
});

export const useGropRelation = routeLoader$(async ({ params }) => {
  const { slug } = params;

  const url = new URL(
    `/api/1/product/groupRelation/section/${slug}`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const product = (await res.json()) as any;
  return product.groupRelation;
});

export default component$(() => {
  const data = useProductOneData();
  const groupRelation = useGropRelation();
  const design = useSignal({});
  const product = useSignal({});

  // const searchValueProduct = $(({ products }: { products: any }) => {
  //   console.log(products);
  //   const currentProduct = products.find((product: any) => {
  //     return product.types[0].value === loc.url.searchParams.get("product");
  //   });

  //   if (currentProduct) {
  //     const currentDesign = currentProduct.design.find((design: any) => {
  //       console.log(design.variant);
  //       console.log(design.size);
  //       console.log(loc.url.searchParams.get("variant"));
  //       console.log(loc.url.searchParams.get("size"));
  //       console.log(design.variant === loc.url.searchParams.get("variant"));
  //       console.log(design.size === loc.url.searchParams.get("size"));

  //       return (
  //         design.variant === loc.url.searchParams.get("variant") &&
  //         design.size === loc.url.searchParams.get("size")
  //       );
  //     });

  //     return {
  //       currentDesign,
  //       currentProduct,
  //     };
  //   }
  //   return {
  //     currentDesign: products[0].design[0],
  //     currentProduct: products[0],
  //   };
  // });

  useTask$(async ({ track }) => {
    track(() => data.value);
    design.value = data.value.filterDesignByProduct;
    product.value = data.value.filterProductByGroup;

    console.log("Cambio el dise;o");
  });

  // console.log(data.value.product);
  return (
    <>
      <SearchOutOptions />
      <LayoutProductAlternative
        currentDesign={design.value}
        currentProduct={product.value}
        groupRelation={groupRelation.value}
        allProducts={data.value.groupProduct.product}
        groupProduct={data.value.groupProduct}
      />
      {/* <LayoutProduct product={data.value} groupRelation={groupRelation.value} /> */}
    </>
  );
});
