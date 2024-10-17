import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ArrowRight from "~/components/primitives/Icons/arrowRight/arrowRight";
import Logo from "~/components/primitives/logo/logo";
import CartCount from "../../cartCount/cartCount";

export default component$(() => {
  const openMenu = useSignal(false);



  const routes = [
    { name: "PRODUCTS", href: "/search" },
    { name: "CATEGORIES", href: "/categories" },
    { name: "ARTISTS", href: "/artists" },
  ];

  const PUBLIC_URL_APP_DASHBOARD = import.meta.env.PUBLIC_URL_APP_DASHBOARD


  return (
    <nav class="relative w-full font-medium drop-shadow-md">
      <div class="flex justify-between items-center w-full h-20 px-4 text-white bg-[#FFFFFF] nav">
        <div>
          <h1 class="text-5xl font-signature ml-2">
            <a
              class="link-underline link-underline-black"
              href="/"
            >
              <Logo />
            </a>
          </h1>
        </div>
        <div class="flex items-center gap-4">
          {/* Desktop Navigation Links */}
          <div class="hidden lg:flex flex-grow justify-center items-center space-x-4">
            {routes.map(({ name, href }, index) => (
              <Link
                key={index}
                class="nav-links px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-105 duration-200 link-underline"
                href={href}
              >
                {name}
              </Link>
            ))}
          </div>
          <div class="flex gap-2">
            <Link
              class="xs:text-[10px] xs:h-[40px] border border-gray-800 hover:border-gray-500 hover:text-gray-500 cursor-pointer rounded-full uppercase
               text-gray-800 p-2 w-full sm:w-[211px] flex justify-evenly items-center gap-2 text-sm md:text-[16px]"
              href={"/how-it-works"}
            >
              How it Works{" "} <ArrowRight />
            </Link>
            <Link
              class="xs:text-[10px] xs:h-[40px] rounded-full text-black uppercase bg-[#FFDA79] hover:bg-yellow-400 cursor-pointer p-2 w-full sm:w-[142px] flex justify-evenly items-center gap-2 text-sm md:text-[16px] shadow-[10px_10px_20px_-5px] shadow-slate-300"
              href={`${PUBLIC_URL_APP_DASHBOARD}/login`}>

              JOIN{" "} <ArrowRight />
            </Link>
            {/* <Link
              class="nav-links text-xl cursor-pointer capitalize font-semibold text-gray-500 hover:scale-105 duration-200 link-underline"
              href="/cart"
            >
              <LuShoppingBag size={56}/>
              {cart.numberProducts > 0 ? (
                <div >{cart.numberProducts}</div>
              ) : null}
            </Link> */}
            <CartCount/>
          </div>
          {/* Mobile Menu Button */}
          <div class="lg:hidden flex-grow flex justify-end">
            <button
              type="button"
              onClick$={() => openMenu.value = true}
              class="text-zinc-900 hover:text-rose-600 focus:outline-none focus:text-rose-600"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {openMenu.value ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {openMenu.value && (
        <div class="lg:hidden absolute top-full left-0 w-full bg-white z-20 text-center">
          <div class="py-2 space-y-1">
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.href}
                class="nav-links px-4 py-2 block cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 link-underline"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
});
