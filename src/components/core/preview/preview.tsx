import { component$, useSignal } from "@builder.io/qwik";
import styles from "./preview.module.css";
import { Image } from "@unpic/qwik";

export const Preview = component$((props: any) => {
  console.log(props.product);
  const radioValue = useSignal(props.product.design[0].url);

  const listTest = [props.product.design[0].url];
  return (
    <div class={styles["preview-container"]}>
      <div class={styles["preview-slider"]}>
        {listTest.map((img: any) => {
          return (
            <div class={styles[img === radioValue.value ? "img-border" : ""]}>
              <input
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
                  radioValue.value = img;
                  console.log("radioValue.value", radioValue.value);
                }}
                for="skuAndSize__29695257"
                class="css-xf3ahq"
              >
                <Image
                  src={img}
                  layout="constrained"
                  width={58}
                  height={58}
                  alt="A lovely bath"
                />{" "}
              </label>
            </div>
          );
        })}
      </div>
      <div class={styles["preview-image"]}>
        <Image
          src={radioValue.value}
          layout="constrained"
          width={300}
          height={300}
          alt="A lovely bath"
        />
      </div>
    </div>
  );
});
