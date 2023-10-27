import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./section-artists.module.css";
import Img1Section from "../../../../public/section-artists/img1.png";

export default component$(() => {
  const widthUser = useSignal<null | number>(null);
  useVisibleTask$(() => {
    console.log("window.innerWidth", window.innerWidth);
    widthUser.value = window.innerWidth;
  });
  return (
    <div>
      <div class={styles["section-container"]}>
        <div class={styles["title"]}>Popular artists</div>
        <div class={styles["content"]}>
          <div class={styles["image-container"]}>
            <img
              width="270"
              height="340"
              class={styles["image-container-img-rounded"]}
              src="https://politicozen.com/wp-content/uploads/Crying-1-400x400.jpg"
              alt=""
            />
            <div class={styles["backgroundImageText"]}>
              <div class={styles["img-container-text"]}>Ramzy Taweel</div>
              <div class={styles["img-container-text2"]}>Artist</div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <img
              width="270"
              height="340"
              class={styles["image-container-img-rounded"]}
              src="https://politicozen.com/wp-content/uploads/Mohsen-Nouri-Najafin-400x400.jpg"
              alt=""
            />
            <div class={styles["backgroundImageText"]}>
              <div class={styles["img-container-text"]}>Mohsen Najafi</div>
              <div class={styles["img-container-text2"]}>Artist</div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <img
              width="270"
              height="340"
              class={styles["image-container-img-rounded"]}
              src="https://politicozen.com/wp-content/uploads/Wildred-Hildonen-400x400.jpg"
              alt=""
            />
            <div class={styles["backgroundImageText"]}>
              <div class={styles["img-container-text"]}>Wilfred Hildonen</div>
              <div class={styles["img-container-text2"]}>Artist</div>
            </div>
          </div>
          <div class={styles["image-container"]}>
            <img
              width="270"
              height="340"
              class={styles["image-container-img-rounded"]}
              src="https://politicozen.com/wp-content/uploads/Hicabi-Demirci-400x400.jpg"
              alt=""
            />
            <div class={styles["backgroundImageText"]}>
              <div class={styles["img-container-text"]}>Hicabi De Merci</div>
              <div class={styles["img-container-text2"]}>Artist</div>
            </div>
          </div>
          {/* <div class={styles["image-container"]}>
            <div data-hover="Description" class={styles["hovertext"]}>
              <img
                width="300"
                height="200"
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
                width="300"
                height="200"
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
                width="300"
                height="200"
                class={styles["image-container-img-rounded"]}
                src={Img1Section}
                alt=""
              />
              <div class={styles["img-container-text"]}>Mehmet Zeber</div>
            </div>
          </div> */}
          {widthUser.value && widthUser.value > 1550 ? (
            <div class={styles["image-container"]}>
              <div data-hover="Description" class={styles["hovertext"]}>
                <img
                  width="300"
                  height="200"
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
