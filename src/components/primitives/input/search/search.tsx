import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <form
      style={{
        width: "100%",
        maxWidth: "600px",
      }}
      action="/search"
    >
      <input
        class="p-4 w-full lg:w-[500px] md:w-[400px] text-12px md:text-15px lg:text-xl rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFDA79] transition duration-300"
        type="search"
        placeholder="Search all artist or products"
        name="q"
        default-value={""}
      />
    </form>
  );
});
