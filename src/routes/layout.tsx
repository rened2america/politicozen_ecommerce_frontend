import { component$, Slot } from "@builder.io/qwik";

import Header from "~/components/core/header/header/header";
import Submenu from "~/components/core/submenu/submenu";
import { Footer } from "~/components/core/footer/footer";

export default component$(() => {
  return (
    <>
      <Header />
      <Submenu />
      <Slot />
      <Footer />
    </>
  );
});
