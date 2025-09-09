import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./how-it-works.css";
import {
  LuShoppingBag,
  LuCircleDollarSign,
  LuUsers,
  LuLineChart,
  LuShieldCheck,
} from "@qwikest/icons/lucide";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <section class="how-it-works">
      <div class="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] font-black flex justify-center text-center">
        <span>Social Reality</span>
        <span class="text-[#FFDA79] pl-3">Punching Back</span>
      </div>
      <div class="text-center text-[24px] sm:text-[30px] md:text-[40px] lg:text-[55px] font-black text-[#1A2445] opacity-20 leading-tight md:leading-[80px] lg:leading-[100px]">
        Unleash creativity, launch your Shop, make your mark!
      </div>

      <article class="content join-area">

        <div style="background-color: #203741;color: white; width: 100%; padding: 30px 0;">
          <div class="steps-band">
            <h2 class="subtitle subtitle--steps">How It Works — Step by Step</h2>
          </div>
        </div>
        <div class="steps">
          {/* step 1 */}
          <div class="step">
            <div class="step-left">
              <img src="/howitworks/flame-1235.png" width="600"
                height="500" alt="Step 1 Image" />
            </div>
            <div class="step-right">
              <h2><span>01.</span> Sign Up & Set Up</h2>
              <p>
                Peaprint collects over <strong>1000+ products</strong> for your various customization needs.
                Pick a product, considering its price, model variety, production location, etc.
                It reduces shipping costs and fulfillment times from print providers to your customers.
              </p>
            </div>
          </div>
          {/* step 2 */}
          <div class="step reverse">
            <div class="step-left">
              <img src="/howitworks/upload.png" width="600"
                height="500" alt="Step 1 Image" />
            </div>
            <div class="step-right">
              <h2><span>02.</span> Upload Your Artwork</h2>
              <p>
                Peaprint collects over <strong>1000+ products</strong> for your various customization needs.
                Pick a product, considering its price, model variety, production location, etc.
                It reduces shipping costs and fulfillment times from print providers to your customers.
              </p>
            </div>
          </div>
          {/* step 3 */}
          <div class="step">
            <div class="step-left">
              <img src="/howitworks/selectStore.png" width="600"
                height="500" alt="Step 1 Image" />
            </div>
            <div class="step-right">
              <h2><span>03.</span> Choose Your Merch</h2>
              <p>
                Peaprint collects over <strong>1000+ products</strong> for your various customization needs.
                Pick a product, considering its price, model variety, production location, etc.
                It reduces shipping costs and fulfillment times from print providers to your customers.
              </p>
            </div>
          </div>
          {/* step 4 */}
          <div class="step reverse">
            <div class="step-left">
              <img src="/howitworks/choose.png" width="600"
                height="500" alt="Step 1 Image" />
            </div>
            <div class="step-right">
              <h2><span>04.</span> Customize Your Store</h2>
              <p>
                Peaprint collects over <strong>1000+ products</strong> for your various customization needs.
                Pick a product, considering its price, model variety, production location, etc.
                It reduces shipping costs and fulfillment times from print providers to your customers.
              </p>
            </div>
          </div>
          {/* step 5 */}
          <div class="step">
            <div class="step-left">
              <img src="/howitworks/promote.png" width="600"
                height="500" alt="Step 1 Image" />
            </div>
            <div class="step-right">
              <h2><span>05.</span> Promote & Sell</h2>
              <p>
                Peaprint collects over <strong>1000+ products</strong> for your various customization needs.
                Pick a product, considering its price, model variety, production location, etc.
                It reduces shipping costs and fulfillment times from print providers to your customers.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "32px",
            display: "grid",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2 class="subtitle-benefits">Your Benefits</h2>
          <ul class="benefits-list">
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div class="">
                <div class="">
                  <div class="">
                    <LuShoppingBag
                      style={{
                        fontSize: "32px",
                        color: "#FFDA79",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Easy Online Selling</strong>
                  </div>
                  <div class="">
                    <p>
                      We take care of shipping, printing, and customer service.
                      Just focus on creating art.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div >
                <div >
                  <div >
                    <LuCircleDollarSign
                      style={{
                        fontSize: "32px",
                        color: "#FFDA79",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Earn Money</strong>
                  </div>
                  <div >
                    <p>
                      You get <strong>40% </strong>of the sales from your
                      products. No hidden fees.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div >
                <div >
                  <div >
                    <LuUsers
                      style={{
                        fontSize: "32px",
                        color: "#FFDA79",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Community & Collaboration</strong>
                  </div>
                  <div >
                    <p>
                      Be part of a vibrant network of political cartoonists.
                      Collaborate, learn, and grow together!
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div >
                <div >
                  <div >
                    <LuLineChart
                      style={{
                        fontSize: "32px",
                        color: "#FFDA79",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Track Your Success</strong>
                  </div>
                  <div >
                    <p>
                      Use simple analytics to see how your store is doing and
                      plan for more sales.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div >
                <div >
                  <div >
                    <LuShieldCheck
                      style={{
                        fontSize: "32px",
                        color: "#FFDA79",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Get Paid Safely</strong>
                  </div>
                  <div >
                    <p>
                      Your earnings are securely transferred through our trusted
                      payment system.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h2 class="subtitle">Join the Politicozen Revolution!</h2>
        <p class="text-join">
          Political discourse keeps our societies vibrant, and your art is the
          backbone of meaningful conversation. Through the PoliticoZen Program,
          let your creativity flow without boundaries, reach a wider audience,
          and earn from each masterpiece you create. You sketch, you satirize,
          you enlighten. Now, it's time to monetize. Sign up today and redefine
          the world of political cartoons. Be seen. Be heard. Be rewarded.
        </p>
        <div class="call-to-action">
          <Link href={import.meta.env.VITE_URL_APP_DASHBOARD + "/register"}>
            <button class="rounded-full p-4 bg-[#FFDA79] hover:bg-yellow-400 text-base shadow-[15px_10px_20px_-2px] shadow-slate-300 transition-colors">Get Started Now!</button>
          </Link>
          {/* Más contenido aquí */}
        </div>
        <p class="text-join !mb-5">
          Need more information? 
          {/* Visit our{" "} */}
          {/* <a class="underline" href="#">
            FAQs
          </a>{" "} */}
          {/* or  */}
          {" "} Please reach out to our support team at{" "}
          <a class="underline" href="mailto:support@politicozen.com">
            support@politicozen.com
          </a>
          . Follow us on{" "}
          <a class="underline" href="https://twitter.com/PoliticoZen">
            Twitter
          </a>
          ,{" "}
          <a class="underline" href="https://www.instagram.com/PoliticoZen/">
            Instagram
          </a>
          , and for{" "}
          <a class="underline" href="https://www.facebook.com/thepoliticozen">
            Facebook
          </a>{" "}
          the latest updates and inspiration from our community of artists!
        </p>
      </article>
    </section>
  );
});
