import { component$ } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Search from "~/components/primitives/input/search/search";
import Pagination from "~/components/primitives/pagination/pagination";

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

  console.log(
    Array.from({ length: 3 }, (_, i) =>
      getArtists.value.artist.slice(
        i * Math.ceil(getArtists.value.artist.length / 3),
        (i + 1) * Math.ceil(getArtists.value.artist.length / 3)
      )
    ).length
  );

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
      <Pagination count={getArtists.value.count} refNav="artists" max={30} />
      <div
        style={{
          display: "flex",
          // gridTemplateColumns: "repeat(auto-fit,minmax(216px, 1fr))",
          padding: "48px 136px",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "500",
          // justifyItems: "center",
        }}
      >
        {Array.from({ length: 3 }, (_, i) =>
          getArtists.value.artist.slice(
            i * Math.ceil(getArtists.value.artist.length / 3),
            (i + 1) * Math.ceil(getArtists.value.artist.length / 3)
          )
        ).map((column, index) => {
          return (
            <div
              style={{
                padding: "36px 36px",
              }}
              key={index}
            >
              {column.map((artist, index) => (
                <div
                  style={{
                    padding: "24px 0",
                    cursor: "pointer",
                  }}
                  onClick$={() => {
                    nav(`/artist/${artist.name.replace(/ /g, "-")}/?page=1`);
                  }}
                  key={index}
                >
                  {artist.name}
                </div>
              ))}
            </div>
          );
          // return (
          //   <div
          //     style={{
          //       borderRadius: "144px",
          //       width: "136px",
          //       height: "136px",
          //       padding: "32px 32px",
          //       display: "flex",
          //       flex: 1,
          //       flexDirection: "column",
          //       // justifyItems: "center",
          //       gap: "16px",
          //       cursor: "pointer",
          //     }}
          //     onClick$={() => {
          //       nav(`/artist/${artist.name.replace(/ /g, "-")}/?page=1`);
          //     }}
          //   >
          //     <div
          //       style={{
          //         fontSize: "14px",
          //         fontWeight: "500",
          //       }}
          //     >
          //       {artist.name}
          //     </div>
          //   </div>
          // );
        })}
      </div>
    </>
  );
});
