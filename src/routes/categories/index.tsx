import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import Search from "~/components/primitives/input/search/search";
import { Image } from "@unpic/qwik";
export const useCategories = routeLoader$(async () => {
  const url = new URL(
    `/api/1/product/categories`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const categories = (await res.json()) as any;
  return categories;
});

export default component$(() => {
  const getCategories = useCategories();

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
          gridTemplateColumns: "repeat( auto-fit, minmax(330px, 350px) )",
          justifyContent: "center",
          width: "100%",
          marginTop: "32px",
          gap: "24px",
          padding: "40px",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        {getCategories.value.categories.map(
          (category: { id: number; value: string; products: any }) => {
            return (
              <div
                key={category.id}
                style={{
                  position: "relative",
                  borderRadius: "8px",
                }}
              >
                <Link
                  href={`${category.value}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    borderRadius: "8px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "grid",
                    justifyItems: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  {category.value}
                </Link>
                <Image
                  layout="fullWidth"
                  height="100"
                  width="200"
                  src={category.products[0].group.urlImage}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
});
