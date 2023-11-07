import { component$ } from "@builder.io/qwik";
import styles from "./section-artists.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={styles["section-container"]}>
      <div class={styles["title"]}>Popular artists</div>
      <div class={styles["content"]}>
        <Link
          href={"/artist/Engin-Selcuk/?page=1"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1699307987211-Engin%20Selcuk-avatar"
            alt=""
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Engin Selcuk</div>
            <div class={styles["img-container-text2"]}>Artist</div>
          </div>
        </Link>
        <Link
          href={"/artist/Saman-Torabi/?page=1"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1699310666999-Saman%20Torabi-avatar"
            alt=""
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Saman Torabi</div>
            <div class={styles["img-container-text2"]}>Artist</div>
          </div>
        </Link>
        <Link
          href={"/artist/Wilfred-Hildonen/?page=1"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1699302068137-Wilfred%20Hildonen-avatar"
            alt=""
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Wilfred Hildonen</div>
            <div class={styles["img-container-text2"]}>Artist</div>
          </div>
        </Link>
        <Link
          href={"/artist/Dennis-Goris/?page=1"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1699304542207-Dennis%20Goris-avatar"
            alt=""
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Dennis Goris</div>
            <div class={styles["img-container-text2"]}>Artist</div>
          </div>
        </Link>
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
        {/* {widthUser.value && widthUser.value > 1550 ? (
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
          ) : null} */}
      </div>
    </div>
  );
});
