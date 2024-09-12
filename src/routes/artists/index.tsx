import { component$ } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import CustomBanner from "~/components/core/custom-banner/custom-banner";
export const useArtist = routeLoader$(async ({ query }) => {
  const page = query.get("page") || "";
  const url = new URL(
    `/api/1/artist/all?page=${page}`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const artists = (await res.json()) as any;
  return artists;
});

export default component$(() => {
  const getArtists = useArtist();
  const nav = useNavigate();

  return (
    <>
      <CustomBanner enableSearch={true} header="Artists" />

      <section class="most-recent pt-10 md:pt-20 mt-[-450px] bg-transparent">
        <div class="res0 flex justify-center flex-wrap items-start pb-[25px] relative z-[1] ml-[11rem]">
          <div class="res1 lg:grid-cols-3 grid gap-6 pb-16">
            {getArtists.value.artist.map((artist: any, index: number) => (
              <div key={index} class=" lg:w-[310px] lg:h-[60px] drop-shadow-sm ">
                <button class="res3 rounded-full border border-[#DDDDDD] w-64 h-full"
                  onClick$={() => nav(`/artist/${artist.name.replace(/ /g, "-")}/?page=1`)}>
                  <div class="justify-start flex items-center px-4 gap-4">
                    <img src="/checkMark.svg" width={20} height={20} />{" "}
                    <span class="text-[#868686] font-medium text-base text-ellipsis">
                      {artist.name}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});
