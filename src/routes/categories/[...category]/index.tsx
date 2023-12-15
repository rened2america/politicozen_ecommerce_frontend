import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import Search from "~/components/primitives/input/search/search";
import CardArt from "~/components/core/card-art/card-art";
export const useArtsFromCategory = routeLoader$(async ({ params }) => {
  const url = new URL(
    `/api/1/product/categories/${params.category}`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const arts = (await res.json()) as any;
  return arts;
});

export default component$(() => {
  const getArtsFromCategory = useArtsFromCategory();

  return (
    <>
      <div
        style={{
          display: "grid",
          justifyItems: "center",
        }}
      >
        <Search />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(330px, 1fr) )",
          justifyContent: "center",
          width: "100%",
          marginTop: "32px",
        }}
      >
        {getArtsFromCategory.value.products.map((product: any) => {
          console.log("productArt", product);
          return (
            <Link
              style={{
                justifySelf: "center",
              }}
              key={product.id}
              href={`/product/${product.group.id}/?variant=white&size=${
                product.types.length > 0
                  ? product?.types[0]?.value === "Mug"
                    ? "11 oz"
                    : "S"
                  : "S"
              }&product=${product?.types[0]?.value}`}
            >
              <CardArt
                image={{
                  name: product.group.name,
                  urlImage: product.group.urlImage,
                }}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
});
