import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        width: "100%",
        marginTop: "56px",
      }}
    >
      <div
        style={{
          display: "grid",
          alignItems: "start",
          justifyItems: "center",
          gridTemplateColumns: "350px 350px 350px",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        <div>
          We’re excited to announce that PoliticoZen is now available on more
          platforms than ever before!
        </div>
        <div>
          All you need to do is create it and we will do the rest. Whether it’s
          on a shirt or a mug or a huge billboard, we can make it happen.{" "}
        </div>
        <div>
          We know how difficult it is to be an artist and get your artwork
          across. Thanks to PoliticoZen, you may never need to worry about it
          ever again. Just create and we will do the rest.
        </div>
      </div>
    </div>
  );
});
