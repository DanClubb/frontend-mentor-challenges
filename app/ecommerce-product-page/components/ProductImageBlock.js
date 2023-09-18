"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import IMAGES from "../images/images.js";
import styles from "../ecommerce-product-page.module.css";

function ProductImageBlock() {
  const [activeImage, setActiveImage] = useState(1);

  const handleThummbnailClick = (e) => {
    setActiveImage((prev) => {
      switch (e.target.id) {
        case "next":
          if (prev === 4) return 1;
          else return prev + 1;
          break;
        case "previous":
          if (prev === 1) return 4;
          else return prev - 1;
          break;
        default:
          return parseInt(e.target.id);
      }
    });
  };
  return (
    <div className={styles.carousel}>
      <div className={styles.mainImage}>
        <button className={styles.close}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <Image
          className={`${styles.productImage}`}
          src={IMAGES[`product${activeImage}`]}
          alt="shoes"
        />

        <button
          id="previous"
          className={`${styles.control} ${styles.previous}`}
          onClick={(e) => handleThummbnailClick(e)}
        >
          <svg
            id="previous"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="previous"
              d="M11 1 3 9l8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          id="next"
          className={`${styles.control} ${styles.next}`}
          onClick={(e) => handleThummbnailClick(e)}
        >
          <svg
            id="next"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="next"
              d="m2 1 8 8-8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className={styles.thumbnails}>
        <div
          className={`${styles.productImage} ${
            activeImage === 1 ? styles.activeThumbnail : ""
          }`}
          onClick={(e) => handleThummbnailClick(e)}
        >
          <Image
            id="1"
            className={styles.productImage}
            src={IMAGES.product1Thumbnail}
            alt="shoes thumbnail"
          />
        </div>
        <div
          className={`${styles.productImage} ${
            activeImage === 2 ? styles.activeThumbnail : ""
          }`}
          onClick={(e) => handleThummbnailClick(e)}
        >
          <Image
            id="2"
            className={styles.productImage}
            src={IMAGES.product2Thumbnail}
            alt="shoes thumbnail"
          />
        </div>
        <div
          className={`${styles.productImage} ${
            activeImage === 3 ? styles.activeThumbnail : ""
          }`}
          onClick={(e) => handleThummbnailClick(e)}
        >
          <Image
            id="3"
            className={styles.productImage}
            src={IMAGES.product3Thumbnail}
            alt="shoes thumbnail"
          />
        </div>
        <div
          className={`${styles.productImage} ${
            activeImage === 4 ? styles.activeThumbnail : ""
          }`}
          onClick={(e) => handleThummbnailClick(e)}
        >
          <Image
            id="4"
            className={styles.productImage}
            src={IMAGES.product4Thumbnail}
            alt="shoes thumbnail"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImageBlock;
