import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        width: "100%",
        marginTop: "56px",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          fontWeight: "700",
          padding: "24px 0",
        }}
      >
        How we work
      </div>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          gridTemplateRows: "1fr 1fr 1fr",
          fontSize: "18px",
          fontWeight: "500",
          color: "white",
          lineHeight: "normal",
          gap: "16px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1B1B1B",
            padding: "16px 32px",
            borderRadius: "16px",
            display: "grid",
            gridTemplateColumns: "400px 400px",
            placeItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            We’re excited to announce that PoliticoZen is now available on more
            platforms than ever before!. Don’t have a way to market and sell
            your artwork? We got you!
          </div>
          <Image
            src="/banners/plataform.png"
            style={{
              borderRadius: "8px",
            }}
            width={300}
            height={300}
          />
        </div>
        <div
          style={{
            backgroundColor: "#1B1B1B",
            padding: "16px 32px",
            borderRadius: "16px",
            display: "grid",
            gridTemplateColumns: "400px 400px",
            placeItems: "center",
          }}
        >
          <Image
            src="/banners/pen.png"
            style={{
              borderRadius: "8px",
            }}
            width={300}
            height={300}
          />
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            All you need to do is create it and we will do the rest. Whether
            it’s on a shirt or a mug or a huge billboard, we can make it happen.
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1B1B1B",
            padding: "16px 32px",
            borderRadius: "16px",
            display: "grid",
            gridTemplateColumns: "400px 400px",
            placeItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            We know how difficult it is to be an artist and get your artwork
            across. Thanks to PoliticoZen, you may never need to worry about it
            ever again. Just create and we will do the rest.
          </div>
          <Image
            src="/banners/artist.png"
            style={{
              borderRadius: "8px",
            }}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
});
