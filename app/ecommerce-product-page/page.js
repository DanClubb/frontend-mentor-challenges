"use client";

import Image from "next/image";
import styles from "./ecommerce-product-page.module.css";
import ProductImageBlock from "./components/ProductImageBlock";
import IMAGES from "./images/images";
import { Kumbh_Sans } from "next/font/google";
import { Fragment, useState } from "react";
import LightBox from "./components/LightBox";

const kumbhSans = Kumbh_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function EcommerceProductPage() {
  const [numItemsSelected, setNumItemsSelected] = useState(0);
  const [numItemsInCart, setNumItemsInCart] = useState(0);
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [lightBoxActive, setLightBoxActive] = useState(true);

  const toggleMobileNav = () => {
    setMobileNavExpanded((prev) => {
      return !prev;
    });
  };

  const toggleCart = () => {
    setCartIsVisible((prev) => {
      return !prev;
    });
  };

  const handleDeleteItemsFromCart = () => {
    setNumItemsInCart(0);
  };

  const handleItemIncrement = (amount) => {
    setNumItemsSelected((prev) => {
      if (prev + amount < 0) return 0;
      return prev + amount;
    });
  };

  const handleCartAddition = (amount) => {
    setNumItemsInCart((prev) => {
      return prev + amount;
    });
    setNumItemsSelected(0);
  };

  const handleLightBoxOpen = () => {
    return setLightBoxActive(true);
  };

  return (
    <div className={`${styles.actingBody} ${kumbhSans.className}`}>
      {lightBoxActive && (
        <LightBox
          lightBoxActive={lightBoxActive}
          setLightBoxActive={setLightBoxActive}
        />
      )}
      <div className={mobileNavExpanded ? styles.darkenBackground : ""}></div>
      <header className={styles.header}>
        <nav>
          <button
            className={`${styles.mobileNavToggle}`}
            aria-controls="nav"
            aria-expanded={mobileNavExpanded}
            onClick={toggleMobileNav}
          >
            <span className="sr-only">Menu</span>
          </button>

          <Image src={IMAGES.logo} alt="sneakers logo" />
          <ul className={styles.navItems} data-visible={mobileNavExpanded}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div>
          <div className={styles.cartIcon} onClick={toggleCart}>
            <Image src={IMAGES.cart} alt="shopping cart" />
            {numItemsInCart > 0 && (
              <span className={styles.cartNotification}>{numItemsInCart}</span>
            )}
          </div>

          <Image
            className={styles.avatar}
            src={IMAGES.avatar}
            width={32}
            height={32}
            alt="avatar"
          />
        </div>
      </header>

      <main className={styles.main}>
        <ProductImageBlock handleLightBoxOpen={handleLightBoxOpen} />

        <div className={cartIsVisible ? styles.cartView : styles.hidden}>
          <h3>Cart</h3>
          <div className={numItemsInCart === 0 ? styles.cartEmpty : ""}>
            {numItemsInCart === 0 ? (
              "Your cart is empty."
            ) : (
              <Fragment>
                <div className={styles.cartItem}>
                  <Image
                    className={styles.productImage}
                    src={IMAGES.product1Thumbnail}
                    alt="shoes"
                  />
                  <div>
                    <h4>Fall Limited Edition Sneakers</h4>
                    <div>
                      $125.00 x {numItemsInCart}{" "}
                      <span>${125 * numItemsInCart}</span>
                    </div>
                  </div>
                  <Image
                    onClick={handleDeleteItemsFromCart}
                    src={IMAGES.delete}
                    alt="delete"
                  />
                </div>
                <button>Checkout</button>
              </Fragment>
            )}
          </div>
        </div>

        <div className={styles.productInfo}>
          <h2>Sneaker Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className={styles.prices}>
            <div className={styles.currentPrice}>
              $125.00<span>50%</span>
            </div>
            <div className={styles.originalPrice}>$250.00</div>
          </div>

          <div className={styles.addToCartControls}>
            <div className={styles.itemSelecter}>
              <button onClick={() => handleItemIncrement(-1)}>
                <Image
                  src={IMAGES.minus}
                  alt="minus number of items from the cart"
                />
              </button>
              <div>{numItemsSelected}</div>
              <button onClick={() => handleItemIncrement(1)}>
                <Image
                  src={IMAGES.plus}
                  alt="plus number of items to the cart"
                />
              </button>
            </div>
            <button
              className={styles.addToCart}
              onClick={() => handleCartAddition(numItemsSelected)}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
              <div>Add to cart</div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
