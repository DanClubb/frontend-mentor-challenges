import ChallengeCard from "./components/ChallengeCard";
import challenges from "./challenges.json";
import CHALLENGE_PREVIEWS from "@/public/challenge-previews/challengePreviews";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Frontend Mentor Challenges</h1>
      <p className={styles.homepageDescription}>
        Click a link to view my finished attempt of each challenge
      </p>
      <section className={styles.links}>
        {Object.keys(challenges).map((challenge) => (
          <ChallengeCard
            route={challenges[challenge].route}
            img={CHALLENGE_PREVIEWS[challenge]}
            title={challenges[challenge].title}
            skills={challenges[challenge].skills}
            difficulty={challenges[challenge].difficulty}
            difficultyNumber={challenges[challenge].difficultyNumber}
            description={challenges[challenge].description}
            key={challenge}
          />
        ))}
      </section>
      <div className="attribution">
        Challenges by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor{" "}
        </a>
        | Coded by{" "}
        <a href="https://danclubb.vercel.app" target="_blank">
          Daniel Clubb
        </a>
        .
      </div>
    </main>
  );
}
