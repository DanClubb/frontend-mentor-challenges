import Image from "next/image";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";
import "./3-column-preview-card.module.css";

export default function ThreeColumnPreviewCard() {
  return (
    <main>
      <div className="column-preview-card">
        <section className="car sedans">
          <Image src={sedans} alt="sedan" />
          <h1 className="column-title">SEDANS</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="btn btn--sedans">Learn More</button>
        </section>

        <section className="car suvs">
          <Image src={suvs} alt="SUV" />

          <h1 className="column-title">SUVS</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>

          <button className="btn btn--suvs">Learn More</button>
        </section>

        <section className="car luxury">
          <Image src={luxury} alt="luxury" />

          <h1 className="column-title">LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="btn btn--luxury">Learn More</button>
        </section>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor{" "}
        </a>
        | Coded by{" "}
        <a href="https://danclubb.vercel.app" target="_blank">
          Daniel Clubb
        </a>
      </div>
    </main>
  );
}
