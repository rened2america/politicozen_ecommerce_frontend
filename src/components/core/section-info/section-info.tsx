import { component$ } from "@builder.io/qwik";
import styles from "./section-info.module.css";
const artistSellers = [
  {
    id: 1,
    name: "Saman Torabi",
    text: "PoliticoZen is not your ordinary e-commerce platform. It’s a sanctuary for art lovers and political enthusiasts alike. The unique blend of artistic imagery on their merchandise speaks volumes. The website is user-friendly, and the quality of the products received was top-notch. A highly recommended place for those looking to make a statement with their purchases.",
    imgUrl:
      "https://politicozen.com/wp-content/uploads/Saman-Torabi-400x400.jpg",
  },
  {
    id: 2,
    name: "Mohsen Najafi",
    text: "The fusion of artistry and practicality is what makes PoliticoZen stand out. The artistically designed products offer a fresh perspective on everyday items. Fast shipping and a seamless shopping experience make it a go-to place for unique finds.",
    imgUrl:
      "https://politicozen.com/wp-content/uploads/Mohsen-Nouri-Najafin-400x400.jpg",
  },
  {
    id: 3,

    name: "Rene Meza",
    text: "PoliticoZen is where art meets advocacy. The artist-embellished products are not only visually appealing but also provoke thought. The website is easy to navigate, and the variety of products ensures there’s something for everyone. Definitely a platform for the politically and artistically inclined.",
    imgUrl:
      "https://politicozen.com/wp-content/uploads/Saman-Torabi-400x400.jpg",
  },
  {
    id: 4,
    name: "Rene Meza",
    text: "Shopping on PoliticoZen is like walking through a gallery, with the added benefit of being able to take a piece of art home with you. The quality of the products is commendable, and the artistic designs are captivating. A refreshing take on online shopping!",
    imgUrl:
      "https://politicozen.com/wp-content/uploads/Saman-Torabi-400x400.jpg",
  },
];

export default component$(() => {
  // const currentSeller = useSignal(0);

  // const moreSeller = () => {
  //   if (currentSeller.value > 4) return;
  //   currentSeller.value++;
  // };

  // const lessSeller = () => {
  //   if (currentSeller.value < 0) return;
  //   currentSeller.value--;
  // };

  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        placeItems: "center",
        backgroundColor: "#1B1B1B",
        margin: "48px 0",
      }}
    >
      <div
        style={{
          color: "white",
          backgroundColor: "#1B1B1B",
          width: "100%",
          padding: "32px 0",
          gap: "16px",
          maxWidth: "1300px",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            fontSize: "48px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          They sell on politicozen
        </div>
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "1fr 1fr",
          //   gap: "48px",
          //   margin: "48px 24px",
          //   boxSizing: "border-box",
          // }}
          class={styles["artist-info"]}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "32px",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                borderRadius: "100px",
              }}
              src={artistSellers[0].imgUrl}
              width="100"
              height="100"
              alt=""
            />
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 24px",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {artistSellers[0].text}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                {artistSellers[0].name}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "32px",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                borderRadius: "100px",
              }}
              src={artistSellers[1].imgUrl}
              width="100"
              height="100"
              alt=""
            />
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 24px",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {artistSellers[1].text}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                {artistSellers[1].name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
