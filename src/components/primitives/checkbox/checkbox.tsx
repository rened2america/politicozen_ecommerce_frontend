import { Signal, component$ } from "@builder.io/qwik";
import style from "./checkbox.module.css";
type checkboxProps = {
  isChecked: Signal<boolean>;
  name: string;
  value: string;
};

export const Checkbox = component$<checkboxProps>(
  ({ isChecked, name, value }) => {
    return (
      <label class={style["label"]}>
        <input
          name={name}
          value={value}
          type="checkbox"
          bind:checked={isChecked}
          // onChange$={(e) => {
          //   productTypeValue.value = e.target.value;
          // }}
        />
        <span>{name}</span>
      </label>
    );
  }
);
