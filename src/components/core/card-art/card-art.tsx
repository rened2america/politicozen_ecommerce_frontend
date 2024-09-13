const Card = (props: any) => {
  return (
    <div class={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-64 h-92`}>
      <div class={`relative h-64 p-4 border-b mx-4`}>
        <img src={props.imageSrc} alt={props.title} width={2160} height={700} class="p-4 object-contain w-full h-full" />
      </div>
      <div class="px-6 py-4 text-center">
        {props.author && (
          <button class="bg-yellow-300 rounded-full font-bold text-sm mb-2 p-2 w-auto">
            {props.author}
          </button>
        )}
        <p class="text-black font-bold text-xl">{props.title}</p>
        {props.price && (
          <p class="text-black font-bold text-xl">{props.price}</p>
        )
        }
      </div>
    </div>
  );
};

export default Card;