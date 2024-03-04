import { Public_Sans } from "next/font/google";
import Image from "next/image";
import { Fragment } from "react";
import Header from "./components/Header";
import styles from "./easybank.module.css";
import IMAGES from "./images/images";

const publicSans = Public_Sans({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
});

export default function EasybankLandingPage() {
    return (
        <div className={styles.actingBody}>
            <Header publicSans={publicSans} />
            <main className={publicSans.className}>
                <div className={styles.intro}>
                    <div className={styles.introText}>
                        <h1 className={styles.heading}>
                            Next generation digital banking
                        </h1>
                        <p>
                            Take your financial life online. Your Easybank
                            account will be a one-stop-shop for spending,
                            saving, budgeting, investing, and much more
                        </p>
                        <button className={styles.button}>
                            Request Invite
                        </button>
                    </div>
                    <div className={styles.images}>
                        <picture>
                            <source
                                srcSet={IMAGES.introDesktop.src}
                                media="(min-width:420px)"
                            />
                            <Image
                                className={styles.backgroundImg}
                                src={IMAGES.introMobile}
                                width={375}
                                height={423}
                                alt="background image"
                            />
                        </picture>
                        <Image
                            className={styles.mockups}
                            src={IMAGES.mockups}
                            width={335}
                            height={423}
                            alt="Phones using easybank"
                        />
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
