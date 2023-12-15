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
      <h1 class="main-title">
        Unleash creativity, launch your Shop, make your mark!
      </h1>
      <article class="content">
        <div class="article-container">
          <div
            style={{
              display: "grid",
              justifyItems: "center",
            }}
          >
            <h2 class="subtitle">Step-by-Step Guide</h2>
            {/* <Image
              src="https://printify.com/wp-content/uploads/2023/04/Create-Your-Pop-Up-Store-With-Printify.jpg"
              width="282"
              height="450"
            /> */}

            <Image src="/howitworks/store.png" width="300" height="184" />
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
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    color: "#77DF95",
                  }}
                >
                  Step 1
                </div>
                <Image src="/howitworks/input.gif" width="240" height="110" />

                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Sign Up & Set Up
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
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    color: "#77DF95",
                  }}
                >
                  Step 2
                </div>
                <Image src="/howitworks/drag3.gif" width="300" height="200" />

                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Upload Your Artwork
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
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    color: "#77DF95",
                  }}
                >
                  Step 3
                </div>
                <Image src="/howitworks/merch.gif" width="260" height="200" />

                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Choose Your Merch
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
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    color: "#77DF95",
                  }}
                >
                  Step 4
                </div>
                <Image src="/howitworks/design2.gif" width="500" height="200" />

                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Customize Your Store
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
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    color: "#77DF95",
                  }}
                >
                  Step 5
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Promote & Sell
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
                      You get 25% of the sales from your products. No hidden
                      fees.
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
            <button class="signup-button">Get Started Now!</button>
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
          <a class="underline" href="https://www.instagram.com/politicozen/">
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
