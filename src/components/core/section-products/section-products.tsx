import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./section-products.module.css";
import Img1Section from "../../../../public/section/img1.png";
import Img2Section from "../../../../public/section/img2.png";
import Img3Section from "../../../../public/section/img3.png";
import Img4Section from "../../../../public/section/img4.png";

export default component$(() => {
  const widthUser = useSignal<null | number>(null);
  useVisibleTask$(() => {
    console.log("window.innerWidth", window.innerWidth);
    widthUser.value = window.innerWidth;
    console.log(widthUser.value);
  });
  return (
    <div>
      <div class={styles["section-container"]}>
        <div class={styles["title"]}>Popular Products</div>
        <div class={styles["content"]}>
          <div class={styles["image-container"]}>
            <div class={styles["image-container-img"]}>
              <img
                width="300"
                height="200"
                class={styles["image-container-img-rounded"]}
                src={Img1Section}
                alt=""
              />
            </div>
            <div class={styles["image-container-content"]}>
              <div class={styles["image-container-top"]}>
                <div class={styles["image-container-top-title"]}>
                  The Crypto Pyramid - Shirt
                </div>
                <span class={styles["tag"]}>$19.98</span>
              </div>
              <div class={styles["image-container-bottom-subtitle"]}>
                Wilfred Hildonen
              </div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <div class={styles["image-container-img"]}>
              <img
                width="300"
                height="200"
                class={styles["image-container-img-rounded"]}
                src={Img2Section}
                alt=""
              />
            </div>
            <div class={styles["image-container-content"]}>
              <div class={styles["image-container-top"]}>
                <div class={styles["image-container-top-title"]}>
                  The Crypto Pyramid - Shirt
                </div>
                <span class={styles["tag"]}>$19.98</span>
              </div>
              <div class={styles["image-container-bottom-subtitle"]}>
                Wilfred Hildonen
              </div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <div class={styles["image-container-img"]}>
              <img
                width="300"
                height="200"
                class={styles["image-container-img-rounded"]}
                src={Img3Section}
                alt=""
              />
            </div>
            <div class={styles["image-container-content"]}>
              <div class={styles["image-container-top"]}>
                <div class={styles["image-container-top-title"]}>
                  The Crypto Pyramid - Shirt
                </div>
                <span class={styles["tag"]}>$19.98</span>
              </div>
              <div class={styles["image-container-bottom-subtitle"]}>
                Wilfred Hildonen
              </div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <div class={styles["image-container-img"]}>
              <img
                width="300"
                height="200"
                class={styles["image-container-img-rounded"]}
                src={Img4Section}
                alt=""
              />
            </div>
            <div class={styles["image-container-content"]}>
              <div class={styles["image-container-top"]}>
                <div class={styles["image-container-top-title"]}>
                  The Crypto Pyramid - Shirt
                </div>
                <span class={styles["tag"]}>$19.98</span>
              </div>
              <div class={styles["image-container-bottom-subtitle"]}>
                Wilfred Hildonen
              </div>
            </div>
          </div>
          {widthUser.value && widthUser.value > 1550 ? (
            <div class={styles["image-container"]}>
              <div class={styles["image-container-img"]}>
                <img
                  width="300"
                  height="200"
                  class={styles["image-container-img-rounded"]}
                  src={Img4Section}
                  alt=""
                />
              </div>
              <div class={styles["image-container-content"]}>
                <div class={styles["image-container-top"]}>
                  <div class={styles["image-container-top-title"]}>
                    The Crypto Pyramid - Shirt
                  </div>
                  <span class={styles["tag"]}>$19.98</span>
                </div>
                <div class={styles["image-container-bottom-subtitle"]}>
                  Wilfred Hildonen
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
});
