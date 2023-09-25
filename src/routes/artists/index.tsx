import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/core/footer/footer";
import Header from "~/components/core/header/header/header";
import SearchOutOptions from "~/components/core/search-out-options/search-out-options";
import Submenu from "~/components/core/submenu/submenu";

export default component$(() => {
  return (
    <>
      <Header />
      <Submenu />
      <SearchOutOptions />
      <Footer />
    </>
  );
});
