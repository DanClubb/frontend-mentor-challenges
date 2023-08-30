import { Fragment } from "react";
import styles from "./results-summary.module.css";

export default function ResultsSummary() {
  return (
    <Fragment>
      <main className={styles.resultsSummaryBody}>
        <div className={styles.resultSummary}>
          <div
            className={`${styles.results} ${styles.grid} ${styles.gridGapLarge}`}
          >
            <h1 className={styles.sectionTitle}>Your Result</h1>

            <p className={styles.resultScore}>
              <span>76</span> of 100
            </p>

            <div className={styles.grid}>
              <p className={styles.resultRank}>Great</p>
              <p>
                You scored higher than 65% of the people who have taken these
                tests
              </p>
            </div>
          </div>

          <div
            className={`${styles.summary} ${styles.grid} ${styles.gridGapLarge}`}
          >
            <h2 className={styles.sectionTitle}>Summary</h2>
            <div className={styles.grid}>
              <div className={`${styles.summaryItem} ${styles.reaction}`}>
                <div className={styles.flexGroup}>
                  <svg
                    className={styles.summaryIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                    />
                  </svg>
                  <h3 className={styles.summaryItemTitle}>Reaction</h3>
                </div>
                <p className={styles.summaryScore}>
                  <span>80</span> / 100
                </p>
              </div>

              <div className={`${styles.summaryItem} ${styles.memory}`}>
                <div className={styles.flexGroup}>
                  <svg
                    className={styles.summaryIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                    />
                  </svg>
                  <h3 className={styles.summaryItemTitle}>Memory</h3>
                </div>
                <p className={styles.summaryScore}>
                  <span>92</span> / 100
                </p>
              </div>

              <div className={`${styles.summaryItem} ${styles.verbal}`}>
                <div className={styles.flexGroup}>
                  <svg
                    className={styles.summaryIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                    />
                  </svg>
                  <h3 className={styles.summaryItemTitle}>Verbal</h3>
                </div>
                <p className={styles.summaryScore}>
                  <span>61</span> / 100
                </p>
              </div>

              <div className={`${styles.summaryItem} ${styles.visual}`}>
                <div className={styles.flexGroup}>
                  <svg
                    className={styles.summaryIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                    />
                  </svg>
                  <h3 className={styles.summaryItemTitle}>Visual</h3>
                </div>
                <p className={styles.summaryScore}>
                  <span>72</span> / 100
                </p>
              </div>
            </div>
            <button className={styles.button}>Continue</button>
          </div>
        </div>
      </main>

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
    </Fragment>
  );
}
