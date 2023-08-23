import Image from "next/image";
import Link from "next/link";
import "./homepage.css";

export default function Home() {
  return (
    <main>
      <h1>Frontend Mentor Challenges</h1>
      <p className="homepage-description">
        Click a link to view my finished attempt of each challenge
      </p>
      <section className="links">
        <Link href="/results-summary" className="link">
          Results Summary
        </Link>
        <Link href="/news-homepage" className="link">
          News Homepage
        </Link>
        <Link href="/3-column-preview-card" className="link">
          3 Column Preview Card
        </Link>
        <Link href="/product-preview-card" className="link">
          Product Preview Card
        </Link>
      </section>
    </main>
  );
}
