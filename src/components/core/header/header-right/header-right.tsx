import { component$, useContext } from "@builder.io/qwik";
import style from "./header-right.module.css";
import { LuShoppingBag } from "@qwikest/icons/lucide";

import { CartContext } from "~/context/cart";
import { Link, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const cart = useContext(CartContext);
  const navigation = useNavigate();
  console.log("cart.numberProducts", cart);
  return (
    <div class={style["header-right-container"]}>
      {/* <div class={style.group}>
        <span class={style.sigin}>Sig in</span>
        <span class={style.login}>Log in</span>
      </div> */}
      <Link
        class={style.join}
        href={import.meta.env.VITE_URL_APP_DASHBOARD + "/login"}
      >
        Join
      </Link>

      {/* <button
        onClick$={() => {
          window.location.replace(
            import.meta.env.VITE_URL_APP_DASHBOARD + "/login"
          );
        }}
      >
        Join
      </button> */}
      <div
        class={style["badgeto"]}
        onClick$={() => {
          console.log("se ejecuto");
          navigation("/cart");
        }}
        // style={{
        //   color: "#303538",
        //   fontSize: "24px",
        //   display: "grid",
        //   position: "relative",
        //   cursor: "pointer",
        // }}
      >
        <LuShoppingBag />
        {cart.numberProducts > 0 ? (
          <div class={style["badge"]}>{cart.numberProducts}</div>
        ) : null}
      </div>
    </div>
  );
});
