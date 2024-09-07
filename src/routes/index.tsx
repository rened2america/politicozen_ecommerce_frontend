import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import HomeSearch from "~/components/core/home-search/home-search";
import SectionArtists from "~/components/core/section-artists/section-artists";
import SectionInfo from "~/components/core/section-info/section-info";
import { CartContext } from "~/context/cart";

export const useArts = routeLoader$(async () => {
  const url = new URL(
    `/api/1/product/artsFromHome`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const arts = (await res.json()) as any;
  return arts;
});

export default component$(() => {
  const cart = useStore({
    products: [],
    numberProducts: 0,
  });
  useContextProvider(CartContext, cart);
  const getArts = useArts();
  return (
    <>
      <div
        style={{
          backgroundImage: `url('./background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '1210px', // Adjusted height to be dynamic
          minHeight: '1210px',
          width: '100%',
        }}
        class="py-12" // Added padding for mobile spacing
      >
        <div class="container mx-auto h-full w-full flex flex-col md:flex-row justify-center md:justify-start items-center md:px-6">
          <div class="text-left xl:pl-[5rem]">
            <div class="bg-[#FFDA79] inline-block p-4 rounded-full">
              <div class="font-bold text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">
                OVER 100 ARTISTS ALREADY EARNING!
              </div>
            </div>
            <div class="my-6">
              <p class="text-3xl md:text-5xl lg:text-6xl font-black font-bold  leading-tight">
                Cartooning Just <br /> Got a lot Cooler <br /> (And Lucrative)!
              </p>
            </div>
            <div>
              <p class="text-15px md:text-2xl lg:text-3xl text-[#636363]">
                Transform your art into earnings
              </p>
            </div>
            <div class="mt-6">
              <HomeSearch />
            </div>
          </div>
        </div>
      </div>
      <section class="most-recent pt-[160px] mt-[-250px] bg-transparent">
        <div class=" flex justify-center items-center mb-[25px] relative z-[1] xl:pl-[10rem]">
          <p class="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Most Recent </p>
          <h2 class="text-[#FFDA79] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl pl-4">Uploads</h2>
        </div>
      </section>

      <SectionArtists arts={getArts.value.arts} />

      <SectionInfo />
    </>
  );
});
