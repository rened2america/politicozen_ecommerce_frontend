import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        width: "100%",
        marginTop: "56px",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          fontWeight: "700",
          padding: "24px 0",
        }}
      >
        How Does It Work?
      </div>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "start",
          fontSize: "18px",
          fontWeight: "500",
          color: "black",
          lineHeight: "normal",
          gap: "16px",
          whiteSpace: "pre-line",
          width: "80%",
        }}
      >
        <div>
          <h2>How Does It Work?</h2>
          <ol>
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
              platform! Customize your storefront within PoliticoZen.com. Make
              it truly yours!
            </li>
            <li>
              <strong>Promote & Sell:</strong> Share your personalized store
              link on all social media platforms, blogs, websites—wherever your
              audience is. The more you promote, the more you earn!
            </li>
          </ol>

          <h3>Your Benefits:</h3>
          <ul>
            <li>
              <strong>Hassle-Free E-commerce:</strong> Forget the complications
              of logistics, printing, or customer service; we handle that. You
              focus on creating!
            </li>
            <li>
              <strong>Generous Earnings:</strong> For each product sold, you
              pocket 25% of the sale. No hidden costs; your creativity deserves
              to be rewarded.
            </li>
            <li>
              <strong>Community & Collaboration:</strong> Be part of a vibrant
              network of political cartoonists. Collaborate, learn, and grow
              together!
            </li>
            <li>
              <strong>Real-Time Analytics:</strong> Track your store’s
              performance with easy-to-understand analytics. Stay informed and
              strategize effectively for more sales!
            </li>
            <li>
              <strong>Secure Payments:</strong> Receive your earnings safely
              through our trusted payment system. You create, you sell, you
              earn. It's that simple!
            </li>
          </ul>

          <h2>Join the PoliticoZen Revolution!</h2>
          <p>
            Political discourse keeps our societies vibrant, and your art is the
            backbone of meaningful conversation. Through the PoliticoZen
            Program, let your creativity flow without boundaries, reach a wider
            audience, and earn from each masterpiece you create. You sketch, you
            satirize, you enlighten. Now, it's time to monetize.
          </p>

          <p>
            Sign up today and redefine the world of political cartoons. Be seen.
            Be heard. Be rewarded.
          </p>

          <Link href="https://app.politicozen.dev/register">
            <div
              style={{
                display: "grid",
                padding: "8px 16px",
                backgroundColor: "black",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
                width: "150px",
                placeItems: "center",
              }}
              id="signup"
            >
              Get Started Now!
            </div>
          </Link>

          <div>
            <p>
              Need more information? Visit our <a href="#">FAQs</a> or reach out
              to our support team at{" "}
              <a href="mailto:support@politicozen.com">
                support@politicozen.com
              </a>
              . Follow us on{" "}
              <a
                style={{
                  cursor: "pointer",
                  fontWeight: "700",
                }}
                href="https://twitter.com/PoliticoZen"
              >
                Twitter
              </a>
              ,{" "}
              <a
                style={{
                  cursor: "pointer",
                  fontWeight: "700",
                }}
                href="https://www.instagram.com/politicozen/"
              >
                Instagram
              </a>
              , and{" "}
              <a
                style={{
                  cursor: "pointer",
                  fontWeight: "700",
                }}
                href="https://www.facebook.com/thepoliticozen"
              >
                Facebook
              </a>{" "}
              for the latest updates and inspiration from our community of
              artists!
            </p>
          </div>

          <blockquote>
            <p>
              *Empower your artistry with PoliticoZen. Together, we create more
              than art; we shape conversations.*
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
});
