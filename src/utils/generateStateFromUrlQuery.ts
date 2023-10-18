export const generateStateFromUrlQuery = (url: URL) => {
  const hasSearch = url.searchParams.get("q");
  const hasFilters = url.searchParams.get("filters");
  let search = "";
  let filters = {
    types: [],
    tag: [],
    artist: [],
  };
  if (hasSearch) {
    search = hasSearch;
  }

  if (hasFilters) {
    filters = JSON.parse(hasFilters);
  }
  return {
    filters,
    search,
  };
};
