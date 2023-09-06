import Image from "next/image";
import Link from "next/link";
import styles from "./styles/challenge-card.module.css";
import github from "../../public/github-mark.png";

function ChallengeCard({
  route,
  img,
  title,
  skills,
  difficulty,
  difficultyNumber,
  description,
}) {
  return (
    <div className={styles.challengeCard}>
      <Link href={route}>
        <Image src={img} alt={`${title} preview`} />
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.challengeInfo}>
            <div>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`${styles[skill]} ${styles.skill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className={`${styles.difficulty} ${styles[difficulty]}`}>
              <div className={styles.difficultyNumber}>
                <span>{difficultyNumber}</span>
              </div>
              <div>{difficulty}</div>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </Link>
      <div className={styles.linkText}>
        View project code in
        <a
          href={`https://github.com/DanClubb/frontend-mentor-challenges/tree/main/app${route}`}
          target="_blank"
          className={styles.link}
        >
          GitHub
          <Image src={github} width={25} height={25} alt="github logo" />
        </a>
      </div>
    </div>
  );
}

export default ChallengeCard;
