import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        placeItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "56px 1fr",
          color: "white",
          backgroundColor: "#1B1B1B",
          width: "80%",
          borderRadius: "16px",
          padding: "16px 32px",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Start Earning with Politicozen
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 500px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                height: "250px",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "32px",
                }}
              >
                We bring you some steps to follow to continue your journey as an
                Artist here with us.
              </div>
              <Link href="https://app.politicozen.dev/login">
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "#1B1B1B",
                    color: "white",
                    width: "100px",
                    height: "40px",
                    fontWeight: "700",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                >
                  Join
                </div>
              </Link>
            </div>
          </div>
          <Image
            style={{
              borderRadius: "16px",
            }}
            src="/banners/start.png"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
});
