import { component$ } from "@builder.io/qwik";
import styles from "./preview.module.css";
import { Image } from "@unpic/qwik";

export const Preview = component$((props: any) => {
  // console.log("propData", props.product);
  // const radioValue = useSignal(props.product.url);
  // const listTest = [props.product];
  // console.log("radioValue.value", listTest);
  return (
    <div class={styles["preview-container"]}>
      {/* <div class={styles["preview-slider"]}>
        {listTest.map((img: any) => {
          console.log("img", img);
          return (
            <div
              class={styles[img.url === radioValue.value ? "img-border" : ""]}
            >
              <input
                style={{
                  borderRadius: "8px",
                }}
                name="skuAndSize"
                type="radio"
                value="2"
                checked
                class={styles["input"]}
                // onChange$={(e) => {
                //   radioValue.value = img;
                //   console.log("radioValue.value", radioValue.value);
                // }}
              />
              <label
                onClick$={() => {
                  radioValue.value = img.url;
                  console.log("radioValue.value", radioValue.value);
                }}
                for="skuAndSize__29695257"
                class="css-xf3ahq"
              >
                <Image
                  style={{
                    objectFit: "cover",
                  }}
                  src={props.product.url}
                  layout="constrained"
                  width={58}
                  height={58}
                  alt="A lovely bath"
                />
              </label>
            </div>
          );
        })}
      </div> */}
      <div class={styles["preview-image"]}>
        <Image
          style={{
            backgroundColor: "#f5f5f5",
            objectFit: "cover",
          }}
          src={props.product.url}
          layout="constrained"
          width={550}
          height={475}
          alt="A lovely bath"
        />
      </div>
    </div>
  );
});
