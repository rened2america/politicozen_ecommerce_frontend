import { TFilter } from "~/context/filter";

export const generateUrlQuery = (
  filters: TFilter,
  search: string,
  nameValue: string,
  typeValue: string
) => {
  const addFilter = filters;
  //@ts-ignore
  if (addFilter[typeValue].find((type: any) => type === nameValue)) {
    //@ts-ignore
    const index = addFilter[typeValue].findIndex(
      (type: any) => type === nameValue
    );
    //@ts-ignore
    addFilter[typeValue].splice(index, 1);
  } else {
    //@ts-ignore
    addFilter[typeValue].push(nameValue);
  }
  let query = "?q=";
  let filtersOptions = {};
  if (search) {
    query += search;
  }
  const hasType = addFilter.types.length > 0;
  const hasTheme = addFilter.theme.length > 0;
  const hasArtist = addFilter.artist.length > 0;

  if (hasType || hasTheme || hasArtist) {
    query += `&filters=`;

    if (hasType) {
      filtersOptions = {
        types: addFilter.types,
      };
    }
    if (hasTheme) {
      filtersOptions = {
        ...filtersOptions,
        theme: addFilter.theme,
      };
    }
    if (hasArtist) {
      filtersOptions = {
        ...filtersOptions,
        artist: addFilter.artist,
      };
    }
    const filtersOptionsJson = JSON.stringify(filtersOptions);
    const filtersOptionsEncodeURI = encodeURI(filtersOptionsJson);
    query += filtersOptionsEncodeURI;
  }

  return query;
};
