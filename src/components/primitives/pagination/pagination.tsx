import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import ArrowLeft from "../Icons/arrowLeft/arrowLeft";
import ArrowRightFull from "../Icons/arrowRight/arrowRightFull";
import ArrowLeftFull from "../Icons/arrowLeft/arrowLeftFull";
import ArrowRight from "../Icons/arrowRight/arrowRight";

export default component$((props: { count: number; refNav: string; max: number }) => {
  const loc = useLocation();
  const numberOfPage = useSignal(Math.ceil(props.count / props.max));

  // Initialize currentPage as a signal
  const currentPage = useSignal(parseInt(loc.url.searchParams.get("page") || "1"));

  // Update currentPage when loc.url.href changes
  useTask$(({ track }) => {
    track(() => loc.url.href);
    currentPage.value = parseInt(loc.url.searchParams.get("page") || "1");
  });

  const getDisplayedPages = () => {
    const totalPages = numberOfPage.value;
    const pages: (string | number)[] = [];

      // Always show the first 3-5 pages
      for (let i = 1; i <= Math.min(5, totalPages); i++) {
        pages.push(i);
      }

      // Show ellipsis after page 5, but adjust for near-boundary conditions
      if (currentPage.value > 5 && totalPages > 6) {
        if (currentPage.value > 6) {
          pages.push("...");
        }

        // Show 5 pages around the current page (2 before, current, and 2 after)
        for (let i = Math.max(6, currentPage.value - 2); i <= Math.min(currentPage.value + 2, totalPages); i++) {
          pages.push(i);
        }
      }

      // Ensure we handle the case of currentPage === 5 properly
      if (currentPage.value <= 5 && totalPages > 5) {
        for (let i = 6; i <= Math.min(10, totalPages); i++) {
          pages.push(i);
        }
      }

      // Show ellipsis and last few pages if necessary
      if (currentPage.value < totalPages - 4) {
        if (currentPage.value < totalPages - 5) {
          pages.push("...");
        }
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // If near the end, show the last few pages
        for (let i = Math.max(6, totalPages - 4); i <= totalPages; i++) {
          if (!pages.includes(i)) pages.push(i);
        }
      }

    return pages;
  };

  const changePage = ({valueParam,abs=false} : {valueParam:number,abs?:boolean}) => {
    const newPageUrl = abs? valueParam : currentPage.value + valueParam  ;
    const url = loc.url.href;
    const newUrl = new URL(url);
    const params = new URLSearchParams(newUrl.search.slice(1));
    params.set("page", newPageUrl.toString());
    return `/${props.refNav}/?${params.toString()}`;
  }

  return (
    <div class="grid place-items-center my-4 py-2 bg-gray-100">
      <div class="grid grid-cols-[32px_1fr_32px] place-items-center">
        <div>
          {currentPage.value === 1 ? (
            <ArrowLeftFull />
          ) : (
            <Link
              class="cursor-pointer"
              href={changePage({valueParam:-1})}
            >
              <ArrowLeft />
            </Link>
          )}
        </div>

        <div class="flex flex-wrap gap-4">
          {getDisplayedPages().map((number, idx) => {
            const isEllipsis = number === "...";

            if (isEllipsis) {
              return <div key={`ellipsis-${idx}`}>...</div>;
            }

            const pgNumber = parseInt(number.toString());

            if (currentPage.value === pgNumber) {
              return (
                <div
                  key={pgNumber}
                  class="px-2 py-1 bg-yellow-300 rounded-[40px] flex-shrink-0 text-center cursor-pointer"
                >
                  {pgNumber}
                </div>
              );
            }

            return (
              <Link
                key={pgNumber}
                class="cursor-pointer rounded-[40px] px-2 py-1 flex-shrink-0 text-center"
                href={changePage({valueParam:pgNumber,abs:true})}
              >
                {pgNumber}
              </Link>
            );
          })}
        </div>

        <div>
          {currentPage.value === numberOfPage.value ? (
            <ArrowRightFull />
          ) : (
            <Link
              class="cursor-pointer"
              href={changePage({valueParam:1})}
            >
              <ArrowRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});