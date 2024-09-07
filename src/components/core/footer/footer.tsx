import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import Logo from "~/components/primitives/logo/logo";
import { Instagram } from "../icons/instagram";
import { Twitter } from "../icons/twitter";
import { Facebook } from "../icons/facebook";
import { Tiktok } from "../icons/tiktok";
import { Link, useNavigate } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  const nav = useNavigate();
  const navLinks = [
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/search" },
    { name: "Artists", href: "/artists" },
    { name: "About", href: "/about-us" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <div class="pb-0 bg-black text-white">
      <div class=' container mx-auto'>
        <div
          class="container mx-auto  md:block lg:grid gird-cols-1 grid  md:grid-cols-3 ">
          <div class="md:mb-6 md:ms-auto  col-span-2 lg:ms-0 border-gray-400 border-r  ">
            <p class='py-10 pl-6 sm:pl-5 lg:pl-4'>
              <img src="/LogoWhite.svg" alt="logo" height={80} width={69} />
            </p>
            <div class="w-full p-4 border-b border-t border-gray-400">
              <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 ">
                <div class="flex flex-col  py-4 lg:flex-row ">
                  <a href="https://pagedone.io/" class="flex  "></a>
                  <ul class="items-center justify-center gap-14 text-center text-lg transition-all duration-500 sm:flex lg:gap-10 xl:gap-14">
                    {navLinks.map((link) => (
                      <li key={link.href} class="my-2 md:my-0 text-left">
                        <Link onClick$={() => nav(link.href)}
                          class="text-white hover:text-gray-400 cursor-pointer">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div class="flex  space-x-4 sm:justify-center  "></div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative md:mb-6    border-gray-400 border-b" >
            <div class=' p-8 '>
              <div class='pt-0'>
                <p class='text-base'>Phone</p>
                <h5 class='font-bold text-lg'><a href="tel:1408-835-073">+1 408-835-0739</a></h5>
              </div>
              <div class='pt-[4rem] '>
                <p class='text-base'>Email Address</p>
                <h5 class='font-bold text-lg'><a href="mailto:chi@politicozen.com">chi@politicozen.com</a></h5>
              </div>
            </div>
          </div>


        </div>
        <div class="container w-full py-4">
          <div class="mx-auto ">
            <div class="">
              <div class="flex flex-col pl-4 items-center justify-center lg:flex-row lg:justify-between">
                <span class="text-sm text-gray-500 ">
                  Copyright © 2024 <span class='text-[#ffda79]'>Politicozen.</span> All Rights Reserved.
                </span>
                <div class="flex gap-2 text-gray-500">
                  <Link onClick$={() => nav("/privacy-policy")}
                    class=" hover:text-gray-400 cursor-pointer">
                    Privacy Policy
                  </Link>
                  |
                  <Link onClick$={() => nav("/terms-of-service")}
                    class=" hover:text-gray-400 cursor-pointer">
                    Terms of Service
                  </Link>
                </div>
                <div class="mt-4 pr-2 flex space-x-4 sm:justify-center lg:mt-0 ">
                  <a
                    href="https://www.facebook.com/thepoliticozen"
                    class=" items-centerhover:bg-gray-900 flex justify-center duration-500"
                  >
                    <img src="./Facebook.svg" alt="logo" height={50} width={50} />
                  </a>

                  <a
                    href="https://www.instagram.com/politicozen/"
                    class="relative flex items-center justify-center duration-500  hover:bg-gray-900 "
                  >
                    <img src="./Instagram.svg" alt="logo" height={50} width={50} />
                  </a>
                  <a
                    href="https://twitter.com/PoliticoZen"
                    class="relative flex items-center justify-center duration-500  hover:bg-gray-900 "
                  >
                    <img src="./Twitter.svg" alt="logo" height={50} width={50} />
                  </a>
                  {/* <a
                        href="https://www.tiktok.com/@politicozen"
                        class="relative flex items-center justify-center duration-500  hover:bg-gray-900 "
                      >
                        <img src="./Twitter.svg" alt="logo" height={50} width={50} />
                      </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
