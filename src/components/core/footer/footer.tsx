import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import Logo from "~/components/primitives/logo/logo";
import { Instagram } from "../icons/instagram";
import { Twitter } from "../icons/twitter";
import { Facebook } from "../icons/facebook";
import { Tiktok } from "../icons/tiktok";

export const Footer = component$(() => {
  return (
    <div class={styles["footer-container"]}>
      <div class={styles["footer-top"]}>
        <div class={styles["footer-top-first"]}>
          <div class={styles["logo"]}>
            <Logo />
          </div>
          <div class={styles["social"]}>
            <span>
              <Instagram />
            </span>
            <span>
              <Twitter />
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <Tiktok />
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
          <div class={styles["footer-top-thirt-header"]}>Artistis</div>
          <div class={styles["footer-top-thirt-content"]}>
            <div>How Works</div>
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
      </div>
      <div class={styles["footer-bottom"]}>
        <div class={styles["footer-bottom-left"]}>
          Copyright © 2022 Politicozen. All Rights Reserved.
        </div>
        <div class={styles["footer-bottom-right"]}>
          <div class={styles["terms-of-service"]}>Terms of Service</div>
          <div class={styles["privacy-policy"]}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
});
