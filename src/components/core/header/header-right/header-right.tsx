import { component$, useContext } from "@builder.io/qwik";
import style from "./header-right.module.css";
import { HiShoppingCartOutline } from "@qwikest/icons/heroicons";
import { CartContext } from "~/context/cart";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const cart = useContext(CartContext);
  const navigation = useNavigate();
  console.log("cart.numberProducts", cart.numberProducts);
  return (
    <div class={style["header-right-container"]}>
      {/* <div class={style.group}>
        <span class={style.sigin}>Sig in</span>
        <span class={style.login}>Log in</span>
      </div> */}
      <button
        class={style.join}
        onClick$={() => {
          window.location.replace("http://app.politicozen.dev/login");
        }}
      >
        Join
      </button>
      <div
        onClick$={() => {
          console.log("se ejecuto");
          navigation("/cart");
        }}
        style={{
          color: "#303538",
          fontSize: "24px",
          display: "grid",
          position: "relative",
        }}
      >
        <HiShoppingCartOutline />
        {cart.numberProducts > 0 ? (
          <div class={style["badge"]}>{cart.numberProducts}</div>
        ) : null}
      </div>
    </div>
  );
});
