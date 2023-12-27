import { component$ } from "@builder.io/qwik";
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
          width: "50%",
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridTemplateRows: "56px 1fr 24px",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          About PTZ
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "500",
            padding: "16px 0",
          }}
        >
          PoliticoZen is a platform where political cartoonists will be able to
          upload their art to be sold on multiple shopping platforms in the USA
          and in 20 countries around the globe plus the social media e-stores.
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          The cartoonist will earn up to <strong>40% </strong>royalties on their
          merchandise.
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "500px 300px",
          gap: "96px",

          marginTop: "96px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateRows: "56px 120px 1fr",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
              padding: "8px",
            }}
          >
            Social Reality Impacting
          </div>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Art isn’t just a thing that you do to pass time or a hobby. It’s
            truly a statement of one’s creative soul. With the help of one’s
            hands and eyes, the ideas that can only be seen in one’s head can
            become real works of art. Tangible and worth sharing with the world.
          </div>
          <div
            style={{
              fontSize: "20px",
              alignSelf: "start",
            }}
          >
            Art is an expression of one’s emotions and feelings, which is why it
            is so important for us to express ourselves through it!
          </div>
        </div>
        <div>
          <Image src="/banners/about.jpg" height={325} width={243} />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          gap: "56px",
          justifyItems: "center",
          marginTop: "56px",
        }}
      >
        <div
          style={{
            width: "50%",
            justifyItems: "center",
            display: "grid",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Web Stores
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "16px 0",
            }}
          >
            PoliticoZen is a one-stop shop for people who want to sell their
            artwork online, whether they're selling physical or digital goods.
            We can help you set up an online store that fits your business's
            style and personality, whether you're running a small Etsy shop or a
            large Amazon marketplace.
          </div>
        </div>
        <div
          style={{
            width: "50%",
            justifyItems: "center",
            display: "grid",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Fulfillment
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "16px 0",
            }}
          >
            We believe that shipping is not just a part of our business, it's
            the heart of it. That's why we've developed our proprietary
            streamlined warehouse system to keep your products organized and
            ready to ship with efficiency and care.
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "16px 0",
            }}
          >
            We can send your orders to over 100 countries daily, so whether
            you're from Australia or Thailand and you're looking for something
            new or if you're from Spain and you need an amazing piece of
            clothing, we've got you covered.
          </div>
        </div>
        <div
          style={{
            width: "50%",
            justifyItems: "center",
            display: "grid",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Printing
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "16px 0",
            }}
          >
            Our in-house screen printing team has over 15 years of experience,
            and we're proud to work with trusted merchandise partners to create
            custom products that are always affordable and available in no time
            at all.
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "16px 0",
            }}
          >
            We love making sure our customers get what they need when they need
            it, and that's why we have a no-rush policy that guarantees the
            lowest possible prices on every item.
          </div>
        </div>
        <div
          style={{
            width: "50%",
            justifyItems: "center",
            display: "grid",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Support
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "16px 0",
            }}
          >
            Customer support is one of our top priorities. We're here to help,
            so don't hesitate to reach out with any questions or issues you
            might be having. We'll get back to you right away!
          </div>
        </div>
      </div>
    </div>
  );
});
