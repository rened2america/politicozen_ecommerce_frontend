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
      <h1 class="main-title">How Does It Work?</h1>
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
            <Image src="/howitworks/store.png" width="300" height="200" />
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
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Sign Up & Set Up
                </div>
                <p>Register with us to create your unique artist profile.</p>
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
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Upload Your Artwork
                </div>
                <p>
                  Simply upload your artwork onto our platform. No technical
                  skills needed!
                </p>
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
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Choose Your Merch
                </div>
                <p>
                  Create a diverse storefront with items your followers will
                  love!
                </p>
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
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Customize Your Store
                </div>
                <p>
                  This is your stage, your platform! Customize your storefront.
                </p>
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
                <p>
                  Share your personalized store link on all social media
                  platforms, blogs, websites—wherever your audience is.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div
          style={{
            padding: "32px",
            display: "grid",
            justifyContent: "center",
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
              <LuShoppingBag style={{ fontSize: "32px", color: "#46915c" }} />
              <strong>Hassle-Free E-commerce</strong> Forget the complications
              of logistics, printing, or customer service; we handle that. You
              focus on creating!
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <LuCircleDollarSign
                style={{ fontSize: "32px", color: "#46915c" }}
              />
              <strong>Generous Earnings</strong> For each product sold, you
              pocket 25% of the sale. No hidden costs; your creativity deserves
              to be rewarded.
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <LuUsers style={{ fontSize: "32px", color: "#46915c" }} />
              <strong>Community & Collaboration</strong> Be part of a vibrant
              network of political cartoonists. Collaborate, learn, and grow
              together!
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <LuLineChart style={{ fontSize: "32px", color: "#46915c" }} />
              <strong>Real-Time Analytics</strong> Track your store’s
              performance with easy-to-understand analytics. Stay informed and
              strategize effectively for more sales!
            </li>
            <li
              style={{
                display: "grid",
                justifyItems: "center",
              }}
            >
              <LuShieldCheck style={{ fontSize: "32px", color: "#46915c" }} />
              <strong>Secure Payments</strong> Receive your earnings safely
              through our trusted payment system. You create, you sell, you
              earn. It's that simple!
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
