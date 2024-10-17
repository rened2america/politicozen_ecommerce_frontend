import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <form
      class="w-100"
      action="/search"
    >
      <input
        class="p-4 w-full text-12px md:text-lg lg:text-xl rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFDA79] transition duration-300"
        type="search"
        placeholder="Search all artists or products"
        name="q"
        default-value={""}
      />
    </form>
  );
});
