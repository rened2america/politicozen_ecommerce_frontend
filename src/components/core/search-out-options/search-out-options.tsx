import { component$ } from "@builder.io/qwik";
import Search from "~/components/primitives/input/search/search";

export default component$(() => {
  return (
    <>
      <div class="mx-auto mt-10 w-[60%]">
        <Search />
      </div>
    </>
  );
});
