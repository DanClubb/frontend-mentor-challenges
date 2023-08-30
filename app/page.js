import ChallengeCard from "./components/ChallengeCard";
import CHALLENGE_PREVIEWS from "@/public/challenge-previews/challengePreviews";
import styles from "./homepage.module.css";

const challenges = {
  resultsSummary: {
    route: "/results-summary",
    img: CHALLENGE_PREVIEWS.resultsSummary,
    title: "Results Summary",
    description:
      "This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!",
  },
  productPreviewCard: {
    route: "/product-preview-card",
    img: CHALLENGE_PREVIEWS.productPreviewCard,
    title: "Product Preview Card",
    description:
      "This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!",
  },
  newsHomepage: {
    route: "/news-homepage",
    img: CHALLENGE_PREVIEWS.newsHomepage,
    title: "News Hompage",
    description:
      "This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!",
  },
  columnPreviewCard: {
    route: "/3-column-preview-card",
    img: CHALLENGE_PREVIEWS.columnPreviewCard,
    title: "3 Column Preview Card",
    description:
      "This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!",
  },
};

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
            img={challenges[challenge].img}
            title={challenges[challenge].title}
            description={challenges[challenge].description}
            key={challenge}
          />
        ))}
      </section>
      <div className="attribution">
        Challenge by{" "}
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
