import { component$ } from "@builder.io/qwik";
import logo from "/logo/logo_black.webp";

export default component$(() => {
  return (
    <img
      style={{ cursor: "pointer" }}
      width="39"
      height="44"
      src={logo}
      alt="logo"
    />
  );
});
