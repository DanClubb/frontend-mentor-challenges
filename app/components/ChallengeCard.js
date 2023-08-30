import Image from "next/image";
import Link from "next/link";

function ChallengeCard({ route, img, title, description }) {
  return (
    <Link href={route} className="challenge-card">
      <Image src={img} alt={`${title} preview`} />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <Link href={route} className="link">
            GitHub
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ChallengeCard;
