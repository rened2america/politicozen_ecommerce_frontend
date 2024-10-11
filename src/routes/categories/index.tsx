import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import CustomBanner from "~/components/core/custom-banner/custom-banner";
import Card from "~/components/core/card-art/card-art";
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
  const categories = [
    { value: "T-Shirt", url: "/T-Shirt.jpg" },
    { value: "Mug", url: "/Mug.jpg" },
    { value: "Sweatshirt", url: "/Sweatshirt.jpg" },
    { value: "Hoodie", url: "/Hoodie.jpg" },
    { value: "Poster", url: "/Poster.jpg" },
    { value: "Canvas", url: "/Canvas.jpg" },
  ]

  return (
    <>
      <CustomBanner enableSearch={true} header="Categories" />
      <section class="most-recent pt-20 mt-[-450px] bg-transparent">
        <div class="ruby0 flex justify-center items-center mb-[25px] relative z-[1] ml-[11rem] flex-wrap mx-auto">
          <div class="ruby grid gap-6 pb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {categories.map(
              (category: { value: string; url: any }, index: number) => {
                return (
                  <Link
                    key={index}
                    href={`${category.value}`}
                    class={`card rounded-xl overflow-hidden shadow-lg border w-fit h-fit cursor-pointer`}
                  >
                    <Card
                      key={index}
                      imageSrc={category.url}
                      title={category.value}
                    />
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
});
