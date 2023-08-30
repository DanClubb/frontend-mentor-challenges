import Image from "next/image";
import Link from "next/link";
import styles from "./styles/challenge-card.module.css";

function ChallengeCard({ route, img, title, description }) {
  return (
    <Link href={route} className={styles.challengeCard}>
      <Image src={img} alt={`${title} preview`} />
      <div className={styles.content}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p>{description}</p>
        <div>
          <Link href={route} className={styles.link}>
            GitHub
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ChallengeCard;
