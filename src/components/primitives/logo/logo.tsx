import { component$ } from "@builder.io/qwik";
import logo from "../../../../public/logo/logo_black.png";

export default component$(() => {
  console.log(logo);
  return <img src={logo} alt="logo" />;
});
