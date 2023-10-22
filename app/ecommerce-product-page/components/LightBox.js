import styles from "../ecommerce-product-page.module.css";
import ProductImageBlock from "./ProductImageBlock";

function LightBox({ lightBoxActive, setLightBoxActive }) {
  const handleLightBoxClose = () => {
    return setLightBoxActive(false);
  };
  return (
    <div className={styles.lightBoxContainer}>
      <ProductImageBlock
        lightBoxActive={lightBoxActive}
        handleLightBoxClose={handleLightBoxClose}
      />
    </div>
  );
}

export default LightBox;
