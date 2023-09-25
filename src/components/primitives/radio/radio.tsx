import { component$, QwikIntrinsicElements } from "@builder.io/qwik";

type radioProps = {
  attributes: QwikIntrinsicElements["input"];
};

export const Radio = component$<radioProps>(({ attributes }) => {
  return <input {...attributes} type="radio" />;
});
