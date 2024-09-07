import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <img
      style={{ cursor: "pointer" }}
      width="39"
      height="44"
      src={"/logo/logo_black.webp"}
      alt="logo"
    />
  );
});
