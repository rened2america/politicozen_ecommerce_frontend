import { component$ } from "@builder.io/qwik";
import logo from "../../../../public/logo/logo_black.webp";

export default component$(() => {
  console.log(logo);
  return <img width="39" height="44" src={logo} alt="logo" />;
});
