import styles from "./social-links.module.css";

export default function SocialLinks() {
    return (
        <main className={styles.socialLinksBody}>
            <div className={styles.container}>
                <div className={styles.profilePic}></div>
                <div>
                    <h1 className={styles.name}>Daniel Clubb</h1>
                    <p className={styles.location}>London, Untied Kingdom</p>
                </div>

                <ul className={styles.links}>
                    <li>
                        <a
                            href="https://github.com/danclubb"
                            className={styles.link}
                            target="_blank"
                        >
                            Github
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/danielclubb/"
                            className={styles.link}
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.danclubb.com"
                            className={styles.link}
                            target="_blank"
                        >
                            Dan Clubb
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.frontendmentor.io/profile/DanClubb"
                            className={styles.link}
                            target="_blank"
                        >
                            Frontend Mentor
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.instagram.com/dan.clubb/"
                            className={styles.link}
                            target="_blank"
                        >
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
}
