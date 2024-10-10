import { $, component$, useStore, useContext } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { FilterContext } from "~/context/filter";
import { generateUrlQuery } from "~/utils/generateUrlQuery";
type FilterName = 'types' | 'tag' | 'artist';

export const Sidebar = component$(({ data }: any) => {
  return (
    <div class="sidebar w-64 p-4 bg-gray-100 rounded-lg h-[865px] overflow-y-auto custom-scrollbar">
      <Link href="/artists" class="bold mb-6 cursor-pointer underline">View all artists..</Link>
      <Section name="types" title="Product Type" items={data.productTypes} />
      <Section name="tag" title="Categories" items={data.categories} />
    </div>
  );
});
interface SectionProps {
  name: FilterName;
  title: string;
  items: string[];
}
const Section = component$(({ name, title, items }: SectionProps) => {
  const state = useStore({
    visibleItems: 4,
  });

  const handleLoadMore = $(() => {
    state.visibleItems += 4; // Load 4 more items
  });

  const handleLoadLess = $(() => {
    state.visibleItems = Math.max(state.visibleItems - 4, 4); // Load 4 less items, but not less than 4
  });

  const filters = useContext(FilterContext);
  const nav = useNavigate();

  return (
    <div class="mb-6">
      <h2 class="text-xl font-bold pb-3">{title}</h2>
      <ul class="space-y-2">
        {items.slice(0, state.visibleItems).map((item: string, index: number) => (
          <li key={index} class="flex items-center text-[#636363] text-base">
            <input
              checked={(filters?.filters?.[name] as string[])?.includes(item) || false}
              value={item}
              name={name}
              type="checkbox"
              class="form-checkbox text-[#636363] rounded bg-[#636363] checked:bg-[#636363] checked:border-transparent"
              onChange$={(e) => {
                const newValue = e.target.value;
                const newUri = generateUrlQuery(
                  filters.filters,
                  filters.search,
                  newValue,
                  name
                );
                nav(`/search/${newUri}`);
              }}
            />
            <span class="ml-2">{item}</span>
          </li>
        ))}
      </ul>
      <div class="flex space-x-2 mt-2">
        {state.visibleItems < items.length && (
          <button
            onClick$={handleLoadMore}
            class="text-black-500 text-sm font-semibold underline"
          >
            LOAD MORE...
          </button>
        )}
        {state.visibleItems > 4 && (
          <button
            onClick$={handleLoadLess}
            class="text-black-500 text-sm font-bold underline"
          >
            LOAD LESS...
          </button>
        )}
      </div>
    </div>
  );
});
