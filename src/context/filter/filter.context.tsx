import { createContextId } from "@builder.io/qwik";

export type TFilter = {
  types: Array<"Shirt" | "Hoodie" | "Mug" | "Canvas" | "Poster">;
  tag: Array<"Art" | "Political" | "Love" | "Way" | "Nasa">;
  artist: Array<"Hamit Gis" | "Wilfred Hildonen" | "Engin Selcuk">;
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
