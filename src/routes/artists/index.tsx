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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(216px, 1fr))",
          padding: "48px 136px",
          justifyContent: "space-between",
          justifyItems: "center",
        }}
      >
        {getArtists.value.artist.map((artist: any) => {
          return (
            <div
              style={{
                borderRadius: "144px",
                width: "136px",
                height: "136px",
                padding: "32px 32px",
                display: "grid",
                gridTemplateRows: "1fr 40px",
                justifyItems: "center",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick$={() => {
                nav(`/artist/${artist.name.replace(/ /g, "-")}/?page=1`);
              }}
            >
              {artist.avatar ? (
                <Image
                  src={artist.avatar}
                  width={136}
                  height={136}
                  alt={artist.name}
                  style={{
                    borderRadius: "144px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "136px",
                    height: "136px",
                    fontSize: "24px",
                    display: "grid",
                    alignItems: "center",
                    justifyItems: "center",
                    backgroundColor: "#f7f8f8",
                    borderRadius: "136px",
                    fontWeight: "700",
                  }}
                >
                  {artist.name.split(" ")[0][0].toUpperCase()}
                  {artist.name.split(" ")[1][0].toUpperCase()}
                </div>
              )}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {artist.name}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});
