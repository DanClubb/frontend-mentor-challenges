"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./loopstudios-landing-page.module.css";
import creations from "./creations.json";
import IMAGES from "./images/images";
import { Alata } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const alata = Alata({
  variable: "--font-alata",
  weight: "400",
  subsets: ["latin"],
});
const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  weight: "300",
  subsets: ["latin"],
});

export default function LoopstudiosLandingPage() {
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavExpanded((prev) => {
      return !prev;
    });
  };
  return (
    <div
      className={`${styles.actingBody} ${josefinSans.className} ${alata.variable}`}
    >
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Image src={IMAGES.logo} alt="loopstudios logo" />
          <button
            className={`${styles.mobileNavToggle}`}
            aria-controls="nav"
            aria-expanded={mobileNavExpanded}
            onClick={toggleMobileNav}
          >
            <span className="sr-only">Menu</span>
          </button>
          <ul className={styles.navItems} data-visible={mobileNavExpanded}>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <h1>Immersive experiences that deliver</h1>
      </header>
      <main>
        <section className={styles.about}>
          <picture>
            <source />
            <Image
              src={IMAGES.mobile.interactive}
              alt="person with a vr headset on"
            />
          </picture>

          <div className={styles.aboutText}>
            <h2>The leader in interactive VR</h2>
            <p className={alata.className}>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <section className={styles.creationsSection}>
          <h2>Our creations</h2>
          <div className={styles.creations}>
            {Object.keys(creations).map((creation) => (
              <article key={creations[creation].name}>
                <div
                  className={styles.responsiveBg}
                  style={{
                    "--mobile-bg": `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${`${IMAGES.mobile[creation]?.src}?v=0`}) center / cover no-repeat`,
                    "--desktop-bg": `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${`${IMAGES.desktop[creation]?.src}?v=0`}) center / cover no-repeat`,
                  }}
                ></div>
                <p>{creations[creation].name}</p>
              </article>
            ))}
          </div>
          <button className={`${styles.seeAll} ${alata.className}`}>
            See all
          </button>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLeftAndTop}>
          <Image src={IMAGES.logo} alt="loopstudios logo" />
          <ul className={`${alata.className} ${styles.footerLinks}`}>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.footerRightAndBottom}>
          <div className={styles.socials}>
            <div>
              <Image src={IMAGES.facebook} alt="facebook logo" />
            </div>
            <div>
              <Image src={IMAGES.twitter} alt="twitter logo" />
            </div>
            <div>
              <Image src={IMAGES.pinterest} alt="pinterest logo" />
            </div>
            <div>
              <Image src={IMAGES.instagram} alt="instagram logo" />
            </div>
          </div>
          <p className={alata.className}>
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
