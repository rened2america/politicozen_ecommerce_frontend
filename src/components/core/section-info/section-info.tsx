import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const testimonialsData = [
    {
      firstName: 'Saman',
      lastName: 'Torabi',
      image: './testimonial_1.png',
      description:
        'PoliticoZen is not your ordinary e-commerce platform. It’s a sanctuary for art lovers and political enthusiasts alike. The unique blend of artistic imagery on their merchandise speaks volumes. The website is user-friendly, and the quality of the products received was top-notch. A highly recommended place for those looking to make a statement with their purchases.',
    },
    {
      firstName: 'Mohsen',
      lastName: 'Najafi',
      image: './testimonial_1.png',
      description:
        'The fusion of artistry and practicality is what makes PoliticoZen stand out. The artistically designed products offer a fresh perspective on everyday items. Fast shipping and a seamless shopping experience make it a go-to place for unique finds.',
    },
  ];

  return (
    <section class="py-[160px]">
      <div class="w-full h-full flex justify-center flex-col">
        <div class="lg:text-[60px] md:text-[40px] sm:text-[30px]  font-black flex justify-center">
          <span>They sell</span>
          <span class="text-[#FFDA79] pl-3">on politicozen</span>
        </div>
        <div class="flex justify-center items-center">
          <div class="lg:text-[150px] md:text-[120px] sm:text-[50px] font-black text-[#1A2445] opacity-[0.05] leading-[150px]">
            Testimonials
          </div>
        </div>
        <div class="flex flex-wrap gap-6 lg:gap-10 justify-center relative -top-[50px]">
          {testimonialsData?.map((item, index) => (
            <div key={index} class="flex flex-col items-center max-w-xs w-full md:max-w-sm lg:max-w-md">
              <div class="testimonial-carousel p-6 bg-white rounded-2xl shadow-lg">
                <div class="mb-6 flex justify-center">
                  <img src="./testimonial_2.png" alt="quote" class="h-8 w-auto" />
                </div>
                <div class="text-left text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
                  {item.description}
                </div>
                <div class="flex items-center gap-2">
                  <div class="">
                    <img src={item.image} alt="alt" class="h-12 w-12 rounded-full" />
                  </div>
                  <div>
                    <div class="font-bold text-sm md:text-base lg:text-lg">
                      {item.firstName} {item.lastName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
