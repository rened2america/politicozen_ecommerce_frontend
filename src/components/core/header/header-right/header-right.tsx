import { component$ } from "@builder.io/qwik";
import style from "./header-right.module.css";
import { HiShoppingBagMini } from "@qwikest/icons/heroicons";
export default component$(() => {
  return (
    <div class={style["header-right-container"]}>
      {/* <div class={style.group}>
        <span class={style.sigin}>Sig in</span>
        <span class={style.login}>Log in</span>
      </div> */}
      <button
        class={style.join}
        onClick$={() => {
          window.location.replace("http://app.localhost:5173/dashboard");
        }}
      >
        Join
      </button>
      <div style={{ color: "#303538", fontSize: "20px", display: "grid" }}>
        <HiShoppingBagMini />
      </div>
    </div>
  );
});
