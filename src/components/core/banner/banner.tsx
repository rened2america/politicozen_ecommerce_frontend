import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <div
      style={{
        maxWidth: "1300px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 32px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          backgroundColor: "#ffda79",
          color: "#1B1B1B",
          padding: "10px 16px",
          width: "fit-content",
          borderRadius: "9999999px",
          fontWeight: "600",
        }}
      >
        Over 100 artist al ready earning!
      </div>
      <h1
        style={{
          fontSize: "72px",
          color: "#1B1B1B",
          padding: "10px 16px",
          fontWeight: "400",
          margin: "40px auto 24px",
          maxWidth: "870px",
          lineHeight: "76px",
          letterSpacing: "-0.5px",
          textAlign: "center",
        }}
      >
        Cartooning Just Got a Lot Cooler (And Lucrative)!
      </h1>
      <div
        style={{
          fontSize: "20px",
          lineHeight: "36px",
          fontWeight: "500",
          color: "#1B1B1B",
        }}
      >
        Transform your art into earnings
      </div>
      <Link
        style={{
          backgroundColor: "#1B1B1B",
          color: "white",
          padding: "24px",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "9999999px",
          marginTop: "24px",
        }}
      >
        More info
      </Link>
    </div>
  );
});
