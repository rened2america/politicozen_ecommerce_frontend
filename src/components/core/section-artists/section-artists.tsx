import { component$ } from "@builder.io/qwik";
import Card from "../card-art/card-art";
import { Link } from "@builder.io/qwik-city";

export default component$((props: any) => {
  return (

    <>
      <section class="bg-white relative">
        <div class="ruby0 flex justify-center items-center mb-[25px] relative z-[1] ml-[11rem] flex-wrap mx-auto">
          <div class="ruby grid pb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {props.arts.map((art: any) => (
              <Link
                key={art.id}
                href={`/product/${art.id}/?size=17"x25.5"&product=Poster`} class="cursor-pointer">
                <Card
                  imageSrc={art.urlImage}
                  author={art.artist.name}
                  title={art.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});
