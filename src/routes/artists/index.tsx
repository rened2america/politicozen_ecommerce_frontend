import { component$ } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import Search from "~/components/primitives/input/search/search";
import styles from "./artist.module.css";
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
      <div class={styles["container-artist"]}>
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
              {column.map((artist: any, index: any) => (
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
      <div class={styles["container-artist-md"]}>
        {Array.from({ length: 2 }, (_, i) =>
          getArtists.value.artist.slice(
            i * Math.ceil(getArtists.value.artist.length / 2),
            (i + 1) * Math.ceil(getArtists.value.artist.length / 2)
          )
        ).map((column, index) => {
          return (
            <div
              style={{
                padding: "36px 36px",
              }}
              key={index}
            >
              {column.map((artist: any, index: any) => (
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
      <div class={styles["container-artist-s"]}>
        {Array.from({ length: 1 }, (_, i) =>
          getArtists.value.artist.slice(
            i * Math.ceil(getArtists.value.artist.length / 1),
            (i + 1) * Math.ceil(getArtists.value.artist.length / 1)
          )
        ).map((column, index) => {
          return (
            <div
              style={{
                padding: "36px 36px",
              }}
              key={index}
            >
              {column.map((artist: any, index: any) => (
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
