import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import Logo from "~/components/primitives/logo/logo";
import { Instagram } from "../icons/instagram";
import { Twitter } from "../icons/twitter";
import { Facebook } from "../icons/facebook";
import { Tiktok } from "../icons/tiktok";
import { Link, useNavigate } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  const nav = useNavigate();

  return (
    <div class={styles["footer-container"]}>
      <div class={styles["footer-top"]}>
        <div class={styles["footer-top-first"]}>
          <div class={styles["logo"]}>
            <Logo />
          </div>
          <div class={styles["social"]}>
            <span>
              <Link href="https://www.instagram.com/politicozen/">
                <Instagram />
              </Link>
            </span>
            <span>
              <Link href="https://twitter.com/PoliticoZen">
                <Twitter />
              </Link>
            </span>
            <span>
              <Link href="https://www.facebook.com/thepoliticozen">
                <Facebook />
              </Link>
            </span>
            <span>
              <Link href="https://www.tiktok.com/@politicozen">
                <Tiktok />
              </Link>
            </span>
          </div>
        </div>
        <div class={styles["footer-top-second"]}>
          <div class={styles["footer-top-second-header"]}>Company</div>
          <div class={styles["footer-top-second-content"]}>
            <div>About</div>
            <div>FAQ</div>
          </div>
        </div>
        <div class={styles["footer-top-thirt"]}>
          <div class={styles["footer-top-thirt-header"]}>Artists</div>
          <div class={styles["footer-top-thirt-content"]}>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick$={() => nav("/how-we-work")}
            >
              How We Works
            </div>
            <div>Shop Benefits</div>
          </div>
        </div>
        <div class={styles["footer-top-four"]}>
          <div class={styles["footer-top-four-header"]}>Contact</div>
          <div class={styles["footer-top-four-content"]}>
            <div>chi@politicozen.com</div>
            <div>+1 408-835-0739</div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            height: "128px",
          }}
        >
          <div
            style={{
              padding: "16px 16px",
              display: "grid",
              backgroundColor: "black",
              color: "white",
              gridTemplateColumns: "1fr 72px",
              gap: "8px",
              borderRadius: "16px",
              height: "32px",
            }}
          >
            <input
              style={{
                padding: "4px 8px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
              type="email"
              placeholder="email"
            />
            <div
              style={{
                cursor: "pointer",
                padding: "4px 8px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "12px",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Suscribe
            </div>
          </div>
        </div>
      </div>
      <div class={styles["footer-bottom"]}>
        <div class={styles["footer-bottom-left"]}>
          Copyright © 2023 Politicozen. All Rights Reserved.
        </div>
        <div class={styles["footer-bottom-right"]}>
          <div
            onClick$={() => nav("/terms-of-service")}
            class={styles["terms-of-service"]}
          >
            Terms of Service
          </div>
          <div
            onClick$={() => nav("/privacy-policy")}
            class={styles["privacy-policy"]}
          >
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
});
