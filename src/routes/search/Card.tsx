import { component$ } from "@builder.io/qwik";

export const Card = component$(({ imageSrc, author, title, price }: any) => {
    return (
        <>
            <div class={`relative h-64 p-4 border-b mx-4`}>
                <img src={imageSrc} alt={title} class="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div class="px-6 py-4 text-center">
                {author && (
                    <button class="bg-yellow-300 rounded-full font-bold text-sm mb-2 p-2 w-auto">
                        {author}
                    </button>
                )}

                <p class="text-black font-bold text-xl">{title}</p>
                {price && (
                    <p class="text-black font-bold text-xl">${price}</p>
                )
                }
            </div>
        </>
    );
});
