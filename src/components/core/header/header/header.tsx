import { component$ } from "@builder.io/qwik";
import HeaderLeft from "../header-left/header-left";
import HeaderRight from "../header-right/header-right";
import styles from "./header.module.css";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  return (
    <>
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1fr 150px",
          height: "100px",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            justifySelf: "start",
            alignItems: "center",
            fontSize: "14px",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            fontWeight: "700",
            color: "white",
            width: "136px",
            cursor: "pointer",
            textAlign: "center",
            backgroundColor: "#000",
            borderRadius: "9999999px",
            height: "48px",
            alignSelf: "center",
          }}
          onClick$={() => {
            nav("/how-it-works");
          }}
        >
          How it works
        </div>

        <nav
          style={{
            display: "grid",
            justifyContent: "center",
          }}
        >
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
              style={{
                cursor: "pointer",
                listStyleType: "none",
              }}
              onClick$={() => {
                nav("/search/?q=");
              }}
            >
              Collections
            </li>
            <li
              style={{
                cursor: "pointer",
              }}
              onClick$={() => {
                nav("/");
              }}
            >
              <HeaderLeft />
            </li>
            <li
              style={{
                cursor: "pointer",
              }}
              onClick$={() => {
                nav("/artists");
              }}
            >
              Artists store
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
