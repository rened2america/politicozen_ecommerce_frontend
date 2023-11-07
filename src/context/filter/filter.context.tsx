import { createContextId } from "@builder.io/qwik";

export type TFilter = {
  types: Array<"Shirt" | "Hoodie" | "Mug">;
  tag: Array<"Political" | "Trump" | "War">;
  artist: Array<"Alex Johnson" | "Jane Smith" | "John Doe">;
};
export interface filterProductState {
  filters: TFilter;
  numberPage: number;
  currentPage: number;
  search: string;
}

export const FilterContext = createContextId<filterProductState>(
  "filter.product-context"
);
