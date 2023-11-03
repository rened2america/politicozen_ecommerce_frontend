import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Card from "~/components/core/card/card";
import { LuTwitter, LuFacebook, LuInstagram } from "@qwikest/icons/lucide";
import Pagination from "~/components/primitives/pagination/pagination";

export const artist = routeLoader$(async ({ query, params }) => {
  const page = query.get("page") || "";
  const { artist } = params;
  // @ts-ignore
  const url = new URL(
    `/api/1/artist/store/${artist}/?page=${page}`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const artistResult = (await res.json()) as any;
  console.log(artistResult);
  return artistResult;
});

export default component$(() => {
  const getArtist = artist();
  console.log(getArtist);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "300px 200px 100px 1fr",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            width: "1028px",
            height: "300px",
            borderRadius: "16px",
          }}
        >
          {getArtist.value.artist.banner ? (
            //
            <Image
              src={getArtist.value.artist.banner}
              layout="constrained"
              width={1028}
              height={300}
              style={{
                borderRadius: "16px",
                objectFit: "cover",
              }}
              alt="banner"
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f7f8f8",
              }}
            ></div>
          )}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "250px 1fr",
            justifyItems: "start",
            alignItems: "center",
            width: "1028px",
            marginTop: "16px",
          }}
        >
          {!getArtist?.value?.artist?.avatar ? (
            <div
              style={{
                height: "156px",
                width: "156px",
                fontSize: "32px",
                borderRadius: "156px",
                display: "grid",
                placeItems: "center",
                border: "3px solid black",
              }}
            >
              {getArtist.value.artist.name.slice(0, 2)}
            </div>
          ) : (
            <Image
              src={getArtist.value.artist.avatar}
              width={156}
              height={156}
              style={{
                borderRadius: "156px",
                display: "grid",
                justifySelf: "center",
              }}
            />
          )}

          <div
            style={{
              fontSize: "32px",
              fontWeight: "500",
              display: "grid",
              gridTemplateRows: "48px 24px 16px 32px",
            }}
          >
            <div>{getArtist.value.artist.name} </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,24px)",
                fontSize: "16px",
              }}
            >
              {getArtist?.value?.artist?.facebook ? (
                <Link
                  style={{
                    cursor: "pointer",
                  }}
                  href={getArtist?.value?.artist?.facebook}
                >
                  <LuFacebook />
                </Link>
              ) : null}
              {getArtist?.value?.artist?.twitter ? (
                <Link
                  style={{
                    cursor: "pointer",
                  }}
                  href={getArtist?.value?.artist?.twitter}
                >
                  <LuTwitter />
                </Link>
              ) : null}
              {getArtist?.value?.artist?.instagram ? (
                <Link
                  style={{
                    cursor: "pointer",
                  }}
                  href={getArtist?.value?.artist?.instagram}
                >
                  <LuInstagram />
                </Link>
              ) : null}
            </div>
            {/* <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {getArtist.value.artist.nationality} Mexico
            </div> */}
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Biography
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                margin: "8px 0",
              }}
            >
              {getArtist.value.artist.bio}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Pagination count={2} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 330px)",
            justifyContent: "space-between",
            width: "1000px",
          }}
        >
          {getArtist.value.products.map((product: any) => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}/?variant=white&size=S`}
              >
                <Card product={product} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
});
