import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./how-it-works.css";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <section class="how-it-works">
      <h1 class="main-title">How Does It Work?</h1>
      <article class="content">
        <h2 class="subtitle">Step-by-Step Guide</h2>
        <ol class="steps-list">
          <li>
            <strong>Sign Up & Set Up:</strong> Register with us to create your
            unique artist profile. It’s your space; personalize it!
          </li>
          <li>
            <strong>Upload Your Artwork:</strong> Have a piece that resonated
            well or sparked debate? It's perfect for your merch! Simply upload
            your artwork onto our platform. No technical skills needed!
          </li>
          <li>
            <strong>Choose Your Merch:</strong> From T-shirts to mugs, select
            from a range of quality products to feature your art. Create a
            diverse storefront with items your followers will love!
          </li>
          <li>
            <strong>Customize Your Store:</strong> This is your stage, your
            platform! Customize your storefront within PoliticoZen.com. Make it
            truly yours!
          </li>
          <li>
            <strong>Promote & Sell:</strong> Share your personalized store link
            on all social media platforms, blogs, websites—wherever your
            audience is. The more you promote, the more you earn!
          </li>
        </ol>

        <h2 class="subtitle">Your Benefits</h2>
        <ul class="benefits-list">
          <li>
            <strong>Hassle-Free E-commerce:</strong> Forget the complications of
            logistics, printing, or customer service; we handle that. You focus
            on creating!
          </li>
          <li>
            <strong>Generous Earnings:</strong> For each product sold, you
            pocket 25% of the sale. No hidden costs; your creativity deserves to
            be rewarded.
          </li>
          <li>
            <strong>Community & Collaboration:</strong> Be part of a vibrant
            network of political cartoonists. Collaborate, learn, and grow
            together!
          </li>
          <li>
            <strong>Real-Time Analytics:</strong> Track your store’s performance
            with easy-to-understand analytics. Stay informed and strategize
            effectively for more sales!
          </li>
          <li>
            <strong>Secure Payments:</strong> Receive your earnings safely
            through our trusted payment system. You create, you sell, you earn.
            It's that simple!
          </li>
        </ul>
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
