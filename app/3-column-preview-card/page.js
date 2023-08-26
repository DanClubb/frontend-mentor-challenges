import Image from "next/image";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";
import styles from "./3-column-preview-card.module.css";
import { Lexend_Deca } from "next/font/google";
import { Big_Shoulders_Display } from "next/font/google";

const lexend_deca = Lexend_Deca({ weight: "400", subsets: ["latin"] });
const big_shoulders_display = Big_Shoulders_Display({
  weight: "700",
  subsets: ["latin"],
});

export default function ThreeColumnPreviewCard() {
  return (
    <main className={`${lexend_deca.className} ${styles.main}`}>
      <div className={styles.columnPreviewCard}>
        <section className={`${styles.column} ${styles.sedans}`}>
          <Image src={sedans} alt="sedan" />
          <h1 className={big_shoulders_display.className}>SEDANS</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className={`${styles.btn} ${styles.btnSedans}`}>
            Learn More
          </button>
        </section>

        <section className={`${styles.column} ${styles.suvs}`}>
          <Image src={suvs} alt="SUV" />

          <h1 className={big_shoulders_display.className}>SUVS</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>

          <button className={`${styles.btn} ${styles.btnSuvs}`}>
            Learn More
          </button>
        </section>

        <section className={`${styles.column} ${styles.luxury}`}>
          <Image src={luxury} alt="luxury" />

          <h1 className={big_shoulders_display.className}>LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className={`${styles.btn} ${styles.btnLuxury}`}>
            Learn More
          </button>
        </section>
      </div>
    </main>
  );
}
