import { component$, useSignal } from "@builder.io/qwik";
import HeaderLeft from "../header-left/header-left";
import HeaderRight from "../header-right/header-right";
import styles from "./header.module.css";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { LuMenu } from "@qwikest/icons/lucide";
export default component$(() => {
  const nav = useNavigate();
  const openMenu = useSignal(false);
  return (
    <>
      <header class={styles["header-container"]}>
        <div
          style={
            openMenu.value
              ? {
                  position: "absolute",
                  width: "80%",
                  height: "120px",
                  top: "80px",
                  backgroundColor: "#f1f1f1",
                  display: "grid",
                  justifyItems: "center",
                  padding: "8px 8px",
                  gap: "24px",
                }
              : { display: "none" }
          }
        >
          <Link href="/artists">Artists</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/how-it-works">How it works</Link>
        </div>
        <div class={styles["header-menu-mobile"]}>
          <LuMenu
            onClick$={() => {
              openMenu.value = !openMenu.value;
            }}
          />
          <div
            style={{
              cursor: "pointer",
            }}
            onClick$={() => {
              nav("/");
            }}
          >
            <HeaderLeft />
          </div>
        </div>
        <div
          class={styles["btn-nav"]}
          onClick$={() => {
            nav("/");
          }}
          style={{
            display: "grid",
            justifySelf: "center",
            alignSelf: "center",
            height: "50px",
            marginTop: "8px",
          }}
        >
          <HeaderLeft />
        </div>
        <div
          class={styles["hiw"]}
          onClick$={() => {
            nav("/how-it-works");
          }}
        >
          How it works
        </div>

        <nav class={styles["home-nav"]}>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "100px 100px 100px",
              listStyle: "none",
              alignItems: "center",
              justifyItems: "center",
              fontSize: "14px",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              fontWeight: "700",
              color: "#1B1B1B",
              justifyContent: "center",
              listStyleType: "none",
              paddingInlineStart: "0px",
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}
          >
            <li
              class={styles["btn-nav"]}
              onClick$={() => {
                nav("/categories");
              }}
            >
              Categories
            </li>
            <li
              class={styles["btn-nav"]}
              onClick$={() => {
                nav("/search/?q=");
              }}
            >
              Products
            </li>
            <li
              class={styles["btn-nav"]}
              onClick$={() => {
                nav("/artists");
              }}
            >
              Artists
            </li>
          </ul>
        </nav>
        <div class={styles["header-right"]}>
          <HeaderRight />
        </div>
      </header>
    </>
  );
});
