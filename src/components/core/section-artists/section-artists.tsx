import { component$ } from "@builder.io/qwik";
import styles from "./section-artists.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={styles["section-container"]}>
      <div class={styles["title"]}>Popular Cartoons</div>
      <div class={styles["content"]}>
        <Link
          href={"/product/10/?variant=white&size=S&product=Sweatshirt"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1701909992098-Halit%20Kurtulmus%20Aytoslu-Art"
            alt="Writer in trouble"
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Writer in trouble</div>
            <div class={styles["img-container-text2"]}>
              Halit Kurtulmus Aytoslu
            </div>
          </div>
        </Link>
        <Link
          href={"/product/16/?variant=white&size=S&product=Shirt"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1701915571955-Engin%20Selcuk-Art"
            alt="Locked Head"
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Locked Head</div>
            <div class={styles["img-container-text2"]}>Engin Selcuk</div>
          </div>
        </Link>
        <Link
          href={"/product/20/?variant=white&size=S&product=Shirt"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1701915749299-Engin%20Selcuk-Art"
            alt="Thief Love"
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Thief Love</div>
            <div class={styles["img-container-text2"]}>Engin Selcuk</div>
          </div>
        </Link>
        <Link
          href={"/product/3/?variant=white&size=S&product=Shirt"}
          class={styles["image-container"]}
        >
          <img
            width="270"
            height="340"
            class={styles["image-container-img-rounded"]}
            src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1701467617719-Wilfred%20Hildonen-Art"
            alt="Wanted"
          />
          <div class={styles["backgroundImageText"]}>
            <div class={styles["img-container-text"]}>Wanted</div>
            <div class={styles["img-container-text2"]}>Wilfred Hildonen</div>
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
