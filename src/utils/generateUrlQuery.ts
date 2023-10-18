import { TFilter } from "~/context/filter";

export const generateUrlQuery = (
  filters: TFilter,
  search: string,
  nameValue: string,
  typeValue: string
) => {
  const addFilter = filters;
  console.log("generateUrlQuery");
  console.log(addFilter);
  console.log(typeValue);
  //@ts-ignore
  if (addFilter[typeValue]?.find((type: any) => type === nameValue)) {
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
  const hasType = addFilter?.types?.length > 0;
  const hasTheme = addFilter?.tag?.length > 0;
  const hasArtist = addFilter?.artist?.length > 0;
  console.log("filteros", addFilter.artist);
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
        tag: addFilter.tag,
      };
    }
    if (hasArtist) {
      const dataArtist = addFilter.artist.map((artist) => {
        return { name: artist };
      });
      filtersOptions = {
        ...filtersOptions,
        artist: dataArtist,
      };
    }
    const filtersOptionsJson = JSON.stringify(filtersOptions);
    const filtersOptionsEncodeURI = encodeURI(filtersOptionsJson);
    query += filtersOptionsEncodeURI;
  }

  return query;
};
