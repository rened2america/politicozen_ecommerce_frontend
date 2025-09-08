import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Image } from '@unpic/qwik';

export const head: DocumentHead = {
  title: 'About PTZ | PoliticoZen',
  meta: [
    {
      name: 'description',
      content:
        'PoliticoZen is a platform for political cartoonists to sell their art on multiple marketplaces worldwide — earn up to 40% royalties.',
    },
  ],
};

export default component$(() => {
  return (
    <main class="pt-24 sm:pt-28">
      {/* Hero */}
      <section class="container mx-auto max-w-6xl px-6">
        <div class="mx-auto max-w-3xl text-center">
          <p class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            About PTZ
            <span class="h-2 w-2 rounded-full bg--[#FFDA79]"></span>
          </p>

          <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Social reality, <span class="text-[#FFDA79]">punching back.</span>
          </h1>

          <p class="mt-6 text-base leading-7 text-zinc-600 sm:text-lg">
            PoliticoZen is a platform where political cartoonists upload their
            art to be sold across multiple shopping platforms in the USA and in
            20+ countries, plus social media e-stores.
          </p>

          <p class="mt-3 text-base leading-7 text-zinc-700 sm:text-lg">
            Cartoonists earn up to
            <span class="mx-1 font-extrabold text-[#FFDA79]">40%</span>
            royalties on their merchandise.
          </p>

          <div class="mx-auto mt-6 h-1 w-16 rounded-full bg-[#FFDA79]/90" />
        </div>
      </section>

      {/* Intro split */}
      <section class="container mx-auto mt-16 max-w-6xl px-6">
        <div class="grid items-center gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <h2 class="text-2xl font-semibold text-zinc-900">
              Social Reality Impacting
            </h2>
            <p class="mt-4 text-zinc-700 text-lg">
              Art isn’t just a thing that you do to pass time or a hobby. It’s
              truly a statement of one’s creative soul. With the help of one’s
              hands and eyes, the ideas that can only be seen in one’s head can
              become real works of art — tangible and worth sharing with the
              world.
            </p>
            <p class="mt-4 text-zinc-700 text-lg">
              Art is an expression of one’s emotions and feelings, which is why
              it is so important for us to express ourselves through it!
            </p>
          </div>

          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-sm overflow-hidden rounded-xl ring-1 ring-black/5">
              <Image
                src="/banners/about.jpg"
                width={600}
                height={800}
                alt="PoliticoZen artists and merchandise"
                class="block w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature stacks */}
      <section class="container mx-auto mt-20 max-w-5xl px-6">
        <div class="grid gap-12">
          {/* Web Stores */}
          <div class="rounded-2xl border border-zinc-200/70 p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-zinc-900">Web Stores</h3>
            <p class="mt-3 text-lg leading-7 text-zinc-700">
              PoliticoZen is a one-stop shop for people who want to sell their
              artwork online, whether they&apos;re selling physical or digital
              goods. We help you set up an online store that fits your style and
              personality — from a small Etsy shop to a large Amazon
              marketplace.
            </p>
          </div>

          {/* Fulfillment */}
          <div class="rounded-2xl border border-zinc-200/70 p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-zinc-900">Fulfillment</h3>
            <p class="mt-3 text-lg leading-7 text-zinc-700">
              Shipping isn’t just a part of our business — it’s the heart of it.
              Our proprietary, streamlined warehouse system keeps your products
              organized and ready to ship with efficiency and care.
            </p>
            <p class="mt-3 text-lg leading-7 text-zinc-700">
              We ship to 100+ countries daily. Whether you’re in Australia,
              Thailand, Spain, or beyond — we’ve got you covered.
            </p>
          </div>

          {/* Printing */}
          <div class="rounded-2xl border border-zinc-200/70 p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-zinc-900">Printing</h3>
            <p class="mt-3 text-lg leading-7 text-zinc-700">
              Our in-house screen printing team has 15+ years of experience. We
              partner with trusted merchandise producers to create custom
              products that are affordable and fast.
            </p>
            <p class="mt-3 text-lg leading-7 text-zinc-700">
              We make sure customers get what they need when they need it — with
              a no-rush policy that preserves the lowest possible prices.
            </p>
          </div>

          {/* Support */}
          <div class="rounded-2xl border border-zinc-200/70 p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-zinc-900">Support</h3>
            <p class="mt-3 text-lg leading-7 text-zinc-700">
              Customer support is one of our top priorities. We’re here to help:
              reach out with any questions or issues and we’ll get back to you
              right away.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div class="mt-16 flex justify-center">
          <a
            href="https://app.politicozen.com"
            class="inline-flex items-center justify-center rounded-full bg-[#FFDA79] px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-rose-600/20 transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600"
          >
            Join PoliticoZen
          </a>
        </div>
      </section>

      {/* Footer spacer */}
      <div class="pb-24" />
    </main>
  );
});
