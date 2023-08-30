import styles from "./product-preview-card.module.css";
import Image from "next/image";
import desktopImg from "./images/image-product-desktop.jpg";
import mobileImg from "./images/image-product-mobile.jpg";
import cart from "./images/icon-cart.svg";
import { Montserrat } from "next/font/google";
import { Fraunces } from "next/font/google";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
const fraunces = Fraunces({ weight: "700", subsets: ["latin"] });

export default function ProductPreviewCard() {
  return (
    <main className={`${styles.main} ${montserrat.className}`}>
      <div className={styles.productCard}>
        <picture>
          <source srcSet={desktopImg.src} media="(min-width:600px)" />
          <Image src={mobileImg} alt="bottle of perfume" />
        </picture>

        <div className={styles.content}>
          <h2 className={styles.catergory}>Perfume</h2>
          <h1 className={`${styles.productName} ${fraunces.className}`}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className={styles.productDescription}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={styles.price}>
            <p className={`${styles.discountedPrice} ${fraunces.className}`}>
              $149.99
            </p>
            <p className={styles.originalPrice}>$169.99</p>
          </div>
          <button className={styles.btn}>
            <Image src={cart} width={15} height={16} alt="shopping cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
