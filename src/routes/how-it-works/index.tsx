import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./how-it-works.css";
import { Image } from "@unpic/qwik";
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
      <h1 class="main-title">Social Reality Punching Back</h1>
      <h2 class="main-subtitle">
        Unleash creativity, launch your Shop, make your mark!
      </h2>
      <article class="content">
        <div class="article-container">
          <div
            style={{
              display: "grid",
              justifyItems: "center",
            }}
          >
            <h2
              class="subtitle"
              style={{
                color: "#ece8de",
              }}
            >
              Step-by-Step Guide
            </h2>
          </div>
          <ol class="steps-list">
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  width: "180px",
                  backgroundColor: "#ece8de",
                  // gridTemplateRows: "40px 1fr 40px",
                  borderRadius: "8px",
                  padding: "24px",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#111",
                  }}
                >
                  Sign Up & Set Up
                </div>
                <Image
                  src="/howitworks/flame-1235.png"
                  width="200"
                  height="200"
                />
                <div
                  style={{
                    fontWeight: "800",
                    color: "#3a7b4d",
                  }}
                >
                  Step 1
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  width: "180px",
                  backgroundColor: "#ece8de",
                  // gridTemplateRows: "40px 1fr 40px",
                  borderRadius: "8px",
                  padding: "24px",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#111",
                  }}
                >
                  Upload Your Artwork
                </div>
                <Image src="/howitworks/upload.png" width="200" height="200" />
                <div
                  style={{
                    fontWeight: "800",
                    color: "#3a7b4d",
                  }}
                >
                  Step 2
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  width: "180px",
                  backgroundColor: "#ece8de",
                  // gridTemplateRows: "40px 1fr 40px",
                  borderRadius: "8px",
                  padding: "24px",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#111",
                  }}
                >
                  Choose Your Merch
                </div>
                <Image
                  src="/howitworks/selectStore.png"
                  width="200"
                  height="200"
                />
                <div
                  style={{
                    fontWeight: "800",
                    color: "#3a7b4d",
                  }}
                >
                  Step 3
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  width: "180px",
                  backgroundColor: "#ece8de",
                  // gridTemplateRows: "40px 1fr 40px",
                  borderRadius: "8px",
                  padding: "24px",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#111",
                  }}
                >
                  Customize Your Store
                </div>
                <Image src="/howitworks/choose.png" width="200" height="200" />
                <div
                  style={{
                    fontWeight: "800",
                    color: "#3a7b4d",
                  }}
                >
                  Step 4
                </div>
              </div>
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  width: "180px",
                  backgroundColor: "#ece8de",
                  // gridTemplateRows: "40px 1fr 40px",
                  borderRadius: "8px",
                  padding: "24px",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#111",
                  }}
                >
                  Promote & Sell
                </div>
                <Image src="/howitworks/promote.png" width="200" height="200" />
                <div
                  style={{
                    fontWeight: "800",
                    color: "#3a7b4d",
                  }}
                >
                  Step 5
                </div>
              </div>
            </li>
          </ol>
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
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <LuShoppingBag
                      style={{
                        fontSize: "32px",
                        color: "black",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Easy Online Selling</strong>
                  </div>
                  <div class="flip-card-back">
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
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <LuCircleDollarSign
                      style={{
                        fontSize: "32px",
                        color: "black",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Earn Money</strong>
                  </div>
                  <div class="flip-card-back">
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
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <LuUsers
                      style={{
                        fontSize: "32px",
                        color: "black",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Community & Collaboration</strong>
                  </div>
                  <div class="flip-card-back">
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
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <LuLineChart
                      style={{
                        fontSize: "32px",
                        color: "black",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Track Your Success</strong>
                  </div>
                  <div class="flip-card-back">
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
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <LuShieldCheck
                      style={{
                        fontSize: "32px",
                        color: "black",
                        alignSelf: "end",
                      }}
                    />
                    <strong>Get Paid Safely</strong>
                  </div>
                  <div class="flip-card-back">
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
        <p class="text-join">
          Need more information? Visit our{" "}
          <a class="underline" href="#">
            FAQs
          </a>{" "}
          or reach out to our support team at{" "}
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
