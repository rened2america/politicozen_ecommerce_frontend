import { component$, useSignal } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import ArrowLeft from "../Icons/arrowLeft/arrowLeft";
import ArrowRightFull from "../Icons/arrowRight/arrowRightFull";
import ArrowLeftFull from "../Icons/arrowLeft/arrowLeftFull";
import ArrowRight from "../Icons/arrowRight/arrowRight";

export default component$((props: { count: number }) => {
  const loc = useLocation();
  console.log("dataprops", props);
  const numberOfPage = useSignal(Math.ceil(props.count / 12));
  const arrayOfPage = useSignal<string[]>(
    Array.from({ length: numberOfPage.value }, (_, idx) => `${++idx}`)
  );
  const nav = useNavigate();
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        margin: "16px 0",
        padding: "8px 0",
        backgroundColor: "#f7f8f8",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "32px 1fr 32px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div>
          {parseInt(loc.url.searchParams.get("page") || "1") === 1 ? (
            <ArrowLeftFull />
          ) : (
            <div
              onClick$={() => {
                const pageUrl = loc.url.searchParams.get("page")
                  ? parseInt(loc.url.searchParams.get("page") || "1")
                  : 1;
                console.log(pageUrl);
                console.log(loc.url.searchParams.get("page"));
                const newPageUrl = pageUrl - 1;
                const url = loc.url.href;
                const newUrl = new URL(url);
                const params = new URLSearchParams(newUrl.search.slice(1));
                params.set("page", newPageUrl.toString());
                console.log(params.toString());
                nav(`/search/?${params.toString()}`);
              }}
            >
              <ArrowLeft />
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap:
              "nowrap" /* Evita el ajuste automático de elementos a la siguiente línea */,
            gap: "16px" /* Espacio entre los elementos */,
          }}
        >
          {arrayOfPage.value.map((number) => {
            const intNumber = parseInt(number);
            if (
              parseInt(loc.url.searchParams.get("page") || "1") === intNumber
            ) {
              return (
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "40px",
                    padding: "4px",
                    height: "16px",
                    width: "16px",
                    flex: "0 0 auto" /* Los elementos no cambian de tamaño y se ajustan automáticamente */,
                    textAlign: "center" /* Alinea el contenido en el centro */,
                  }}
                >
                  {intNumber}
                </div>
              );
            }

            return (
              <div
                key={number}
                style={{
                  borderRadius: "40px",
                  padding: "4px",
                  height: "16px",
                  width: "16px",
                  flex: "0 0 auto" /* Los elementos no cambian de tamaño y se ajustan automáticamente */,
                  textAlign: "center" /* Alinea el contenido en el centro */,
                }}
                onClick$={() => {
                  const url = loc.url.href;
                  const newUrl = new URL(url);
                  const params = new URLSearchParams(newUrl.search.slice(1));
                  params.set("page", number);
                  nav(`/search/?${params.toString()}`);
                }}
              >
                {intNumber}
              </div>
            );
          })}
        </div>
        <div>
          {parseInt(loc.url.searchParams.get("page") || "1") ===
          numberOfPage.value ? (
            <ArrowRightFull />
          ) : (
            <div
              onClick$={() => {
                const pageUrl = loc.url.searchParams.get("page")
                  ? parseInt(loc.url.searchParams.get("page") || "1")
                  : 1;
                console.log(pageUrl);
                console.log(loc.url.searchParams.get("page"));
                const newPageUrl = pageUrl + 1;
                const url = loc.url.href;
                const newUrl = new URL(url);
                const params = new URLSearchParams(newUrl.search.slice(1));
                params.set("page", newPageUrl.toString());
                console.log(params.toString());
                nav(`/search/?${params.toString()}`);
              }}
            >
              <ArrowRight />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
