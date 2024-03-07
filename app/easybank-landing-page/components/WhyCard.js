import styles from "../easybank.module.css";
import IMAGES from "../images/images";

export default function WhyCard({ icon, title, description }) {
    return (
        <div className={styles.reason}>
            <img src={IMAGES[icon].src} />
            <h3 className={styles.reasonTitle}>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
