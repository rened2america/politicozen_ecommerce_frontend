import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
// import Card from "~/components/core/card/card";
import { LuTwitter, LuFacebook, LuInstagram } from "@qwikest/icons/lucide";
import Pagination from "~/components/primitives/pagination/pagination";
import CardArt from "~/components/core/card-art/card-art";

export const useArtist = routeLoader$(async ({ query, params }) => {
  const page = query.get("page") || "";
  const { artist } = params;
  console.log("artist", artist);
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

export const useGropRelationByArtist = routeLoader$(async ({ params }) => {
  const { artist } = params;
  const url = new URL(
    `/api/1/product/groupRelation/${artist}`,
    import.meta.env.VITE_URL_BACKEND
  );
  const res = await fetch(url);
  const product = (await res.json()) as any;
  console.log("product.groupRelation", product.groupRelation);
  return product.groupRelation;
});

export default component$(() => {
  const getArtist = useArtist();
  const groupRelation = useGropRelationByArtist();

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "500px 100px 1fr",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1028px",
            width: "100%",
            maxHeight: "300px",
            borderRadius: "16px",
          }}
        >
          {getArtist.value.artist.banner ? (
            //
            <Image
              src={getArtist.value.artist.banner}
              layout="fullWidth"
              height={300}
              // style={{
              //   borderRadius: "16px",
              //   objectFit: "cover",
              // }}
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "250px 1fr",
              justifyItems: "start",
              alignItems: "center",
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
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href={
                      getArtist?.value?.artist?.facebook?.startsWith(
                        "http://"
                      ) ||
                      getArtist?.value?.artist?.facebook?.startsWith("https://")
                        ? getArtist?.value?.artist?.facebook
                        : `https://${getArtist?.value?.artist?.facebook}`
                    }
                  >
                    <LuFacebook />
                  </a>
                ) : null}
                {getArtist?.value?.artist?.twitter ? (
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href={
                      getArtist?.value?.artist?.twitter?.startsWith(
                        "http://"
                      ) ||
                      getArtist?.value?.artist?.twitter?.startsWith("https://")
                        ? getArtist?.value?.artist?.twitter
                        : `https://${getArtist?.value?.artist?.twitter}`
                    }
                  >
                    <LuTwitter />
                  </a>
                ) : null}
                {getArtist?.value?.artist?.instagram ? (
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href={
                      getArtist?.value?.artist?.instagram?.startsWith(
                        "http://"
                      ) ||
                      getArtist?.value?.artist?.instagram?.startsWith(
                        "https://"
                      )
                        ? getArtist?.value?.artist?.instagram
                        : `https://${getArtist?.value?.artist?.instagram}`
                    }
                  >
                    <LuInstagram />
                  </a>
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
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <Pagination
            count={2}
            refNav={`artist/${getArtist.value.artist.id}`}
            max={12}
          />
        </div>
        {groupRelation.value && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat( auto-fit, minmax(330px, 1fr) )",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {groupRelation.value.map((product: any) => {
              console.log("esto esta en el array", groupRelation.value.length);
              return (
                <Link
                  style={{
                    justifySelf: "center",
                  }}
                  key={product.product[0].id}
                  href={`/product/${product.id}/?variant=white&size=${
                    product.product[0].types.length > 0
                      ? product.product[0]?.types[0]?.value === "Mug"
                        ? "11 oz"
                        : "S"
                      : "S"
                  }&product=${product.product[0]?.types[0]?.value}`}
                >
                  <CardArt image={product} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
});
