import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./section-artists.module.css";
import Img1Section from "../../../../public/section-artists/img1.png";
import Img2Section from "../../../../public/section-artists/img2.png";

export default component$(() => {
  const widthUser = useSignal<null | number>(null);
  useVisibleTask$(() => {
    console.log("window.innerWidth", window.innerWidth);
    widthUser.value = window.innerWidth;
  });
  return (
    <div>
      <div class={styles["section-container"]}>
        <div class={styles["title"]}>Popular Artists</div>
        <div class={styles["content"]}>
          <div class={styles["image-container"]}>
            <div data-hover="Description" class={styles["hovertext"]}>
              <img
                class={styles["image-container-img-rounded"]}
                src={Img1Section}
                alt=""
              />
              <div class={styles["img-container-text"]}>Ramzy Taweel</div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <div data-hover="Description" class={styles["hovertext"]}>
              <img
                class={styles["image-container-img-rounded"]}
                src={Img2Section}
                alt=""
              />
              <div class={styles["img-container-text"]}>Wilfred Hildonen</div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <div data-hover="Description" class={styles["hovertext"]}>
              <img
                class={styles["image-container-img-rounded"]}
                src={Img1Section}
                alt=""
              />
              <div class={styles["img-container-text"]}>Oguz Gurel</div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <div data-hover="Description" class={styles["hovertext"]}>
              <img
                class={styles["image-container-img-rounded"]}
                src={Img1Section}
                alt=""
              />
              <div class={styles["img-container-text"]}>Mehmet Zeber</div>
            </div>
          </div>
          {widthUser.value && widthUser.value > 1500 ? (
            <div class={styles["image-container"]}>
              <div data-hover="Description" class={styles["hovertext"]}>
                <img
                  class={styles["image-container-img-rounded"]}
                  src={Img1Section}
                  alt=""
                />
                <div class={styles["img-container-text"]}>Mehmet Zeber</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
});
