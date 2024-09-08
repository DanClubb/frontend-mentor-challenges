import CHALLENGE_PREVIEWS from "@/public/challenge-previews/challengePreviews";
import challenges from "./challenges.json";
import ChallengeCard from "./components/ChallengeCard";
import styles from "./homepage.module.css";

export default function Home() {
    const sortByDifficulty = Object.keys(challenges).sort((a, b) => {
        return challenges[b].difficultyNumber - challenges[a].difficultyNumber;
    });
    return (
        <main className={styles.homepage}>
            <h1 className={styles.title}>
                <span>Frontend </span>
                <span>Mentor </span>
                <span>Challenges</span>
            </h1>
            <div className={styles.text}>
                <p className={styles.homepageDescription}>
                    Click a card below to view my finished attempt of the
                    challenge
                </p>
                <p className={styles.designs}>
                    All challenges have been built to match the provided designs
                    which were created to the following widths:
                    <br /> - Mobile: 375px
                    <br /> - Desktop: 1440px{" "}
                </p>
            </div>

            <section className={styles.links}>
                {sortByDifficulty.map((challenge) => (
                    <ChallengeCard
                        route={challenges[challenge].route}
                        img={CHALLENGE_PREVIEWS[challenge]}
                        title={challenges[challenge].title}
                        skills={challenges[challenge].skills}
                        difficulty={challenges[challenge].difficulty}
                        difficultyNumber={
                            challenges[challenge].difficultyNumber
                        }
                        description={challenges[challenge].description}
                        key={challenge}
                    />
                ))}
            </section>
            <div className="attribution">
                Challenges by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor{" "}
                </a>
                | Coded by{" "}
                <a href="https://www.danclubb.com" target="_blank">
                    Daniel Clubb
                </a>
                .
            </div>
        </main>
    );
}
