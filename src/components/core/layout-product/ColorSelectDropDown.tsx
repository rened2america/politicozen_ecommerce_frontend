import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

interface ColorOption {
  value: string;
}

interface ColorDropdownProps {
  currentProduct: {
    colors: ColorOption[];
  };
}

export default component$((props: ColorDropdownProps) => {
  const loc = useLocation();
  const nav = useNavigate();
  const changeColor = useSignal<string>("");

  // Validate colors array exists to prevent runtime errors
  if (!props.currentProduct?.colors?.length) {
    return null;
  }

  const fallbackToFirstColor = $(() => {
    const firstColor = props.currentProduct.colors[0]?.value.toLowerCase();
    if (firstColor) {
      const size = loc.url.searchParams.get("size") || "S";
      const product = loc.url.searchParams.get("product");
      const productId = loc.params.slug;
      nav(`/product/${productId}/?variant=${firstColor}&size=${size}&product=${product}`);
      changeColor.value = firstColor;
    }
  });
  
  useVisibleTask$(() => {
    try {
      const urlVariant = loc.url.searchParams.get("variant");
      if (urlVariant) {
        // Validate that the URL variant exists in available colors
        const isValidColor = props.currentProduct.colors.some(
          color => color.value.toLowerCase() === urlVariant.toLowerCase()
        );
        if (isValidColor) {
          changeColor.value = urlVariant.toLowerCase();
        } else {
          // If URL color is invalid, fallback to first color
          fallbackToFirstColor();
        }
      } else {
        fallbackToFirstColor();
      }
    } catch (error) {
      console.error('Error in color selection:', error);
      fallbackToFirstColor();
    }
  });

  return (
    <div class="relative w-full max-w-xs">
      <select
        class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-base font-medium text-gray-700 shadow-sm hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={changeColor.value || loc.url.searchParams.get("variant")?.toLowerCase() || ""}
        onChange$={(e) => {
          try {
            const variant = (e.target as HTMLSelectElement).value.toLowerCase();
            const size = loc.url.searchParams.get("size") || "S";
            const product = loc.url.searchParams.get("product");
            const productId = loc.params.slug;
            changeColor.value = variant;
            nav(`/product/${productId}/?variant=${variant}&size=${size}&product=${product}`);
          } catch (error) {
            console.error('Error changing color:', error);
          }
        }}
      >
        <option value="" disabled>Select Color</option>
        {props.currentProduct.colors.map((color) => (
          <option
            key={color.value}
            value={color.value.toLowerCase()}
          >
            {color.value}
          </option>
        ))}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5 text-gray-400" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fill-rule="evenodd" 
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
            clip-rule="evenodd" 
          />
        </svg>
      </div>
    </div>
  );
});