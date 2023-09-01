import styles from "./news-homepage.module.css";
import Image from "next/image";
import IMAGES from "./assets/images/images";

export default function NewsHomepage() {
  return (
    <div className={styles.actingBody}>
      <header className={styles.header}>
        <Image src={IMAGES.logo} alt="logo" />
        <nav>
          <ul className={styles.nav}>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section>
          <Image src={IMAGES.web3} alt="web 3" />
          <div className={styles.mainArticle}>
            <h1>The Bright Future of Web 3.0?</h1>
            <div className={styles.mainArticlePreview}>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className={styles.readMore}>Read more</button>
            </div>
          </div>
        </section>
        <section className={styles.newArticles}>
          <h2 className={styles.newArticlesTitle}>New</h2>
          <article>
            <h3>Hydrogen VS Electric Cars</h3>
            Will hydrogen-fueled cars ever catch up to EVs?
          </article>
          <article>
            <h3>The Downsides of AI Artistry</h3>
            What are the possible adverse effects of on-demand AI image
            generation?
          </article>
          <article>
            <h3>Is VC Funding Drying Up?</h3>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </article>
        </section>
        <section className={styles.popularArticles}>
          <article>
            <Image src={IMAGES.retroPC} alt="retro pc" />
            <div className={styles.popularArticleContent}>
              <div className={styles.number}>01</div>
              <h4>Reviving Retro PCs</h4>
              What happens when old PCs are given modern upgrades?
            </div>
          </article>
          <article>
            <Image src={IMAGES.keyboard} alt="keyboard" />
            <div className={styles.popularArticleContent}>
              <div className={styles.number}>02</div>
              <h4>Top 10 Laptops of 2022</h4>
              Our best picks for various needs and budgets.
            </div>
          </article>
          <article>
            <Image src={IMAGES.gamingController} alt="gaming controller" />
            <div className={styles.popularArticleContent}>
              <div className={styles.number}>03</div>
              <h4>The Growth of Gaming</h4>
              How the pandemic has sparked fresh opportunities.
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
