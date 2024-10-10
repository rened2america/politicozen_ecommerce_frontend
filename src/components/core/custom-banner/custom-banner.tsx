import { component$ } from "@builder.io/qwik";

import Search from "~/components/primitives/input/search/search";

export default component$((props: any) => {
    return (
        <div
            style={{
                backgroundImage: `url('/Banner.png')`,
            }}
            class="w-full h-[800px] bg-cover bg-center"
        >
            <div class="container mx-auto h-full w-full flex justify-center">
                <div class="flex flex-col gap-10">
                    <div class="w-96 mt-24 text-center ">
                        <p class="text-6xl md:text-8xl leading-[60px] font-black flex justify-center ">
                            {props.header && props.header}
                        </p>
                    </div>
                    <div class="w-full px-5">
                        {props.enableSearch ? (
                            <Search />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});