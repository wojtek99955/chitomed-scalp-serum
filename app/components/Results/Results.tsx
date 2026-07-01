import styles from "./Styles.module.css"

const Results = () => {
  return (
    <section className={styles.beforeAfterSection} id="before-after">
      <div className={styles.beforeAfterInner}>
        <div className={styles.beforeAfterIntro}>
          <p className={styles.eyebrowDark}>Efekty wizualne</p>
          <h2>
            Przed & po.
            <span> Po 28 dniach stosowania.</span>
          </h2>
          <p>
            Przykład zmiany wyglądu skóry głowy i optycznej gęstości włosów po
            regularnym rytuale serum CHITOMED FGF-2 + MCC.
          </p>
        </div>

        <div className={styles.beforeAfterGrid}>
          <article className={styles.beforeAfterCard}>
            <div className={styles.imageWrap}>
              <img
                src="https://chitomed-files.b-cdn.net/scalp-serum/before-serum.webp"
                alt="Skóra głowy przed stosowaniem serum"
              />
              <span className={styles.imageBadge}>Przed</span>
            </div>

            <div className={styles.cardCaption}>
              <span>Start kuracji</span>
              <strong>Przed</strong>
            </div>
          </article>

          <div className={styles.daysBadge}>
            <strong>28</strong>
            <span>dni</span>
          </div>

          <article className={`${styles.beforeAfterCard} ${styles.afterCard}`}>
            <div className={styles.imageWrap}>
              <img
                src="https://chitomed-files.b-cdn.net/scalp-serum/after-serum.webp"
                alt="Skóra głowy po 28 dniach stosowania serum"
              />
              <span className={styles.imageBadge}>Po</span>
            </div>

            <div className={styles.cardCaption}>
              <span>Po regularnym stosowaniu</span>
              <strong>Po 28 dniach</strong>
            </div>
          </article>
        </div>

        <p className={styles.beforeAfterNote}>
          Efekty kosmetyczne mogą różnić się w zależności od kondycji skóry
          głowy, regularności stosowania i indywidualnych uwarunkowań.
        </p>
      </div>
    </section>
  );
}

export default Results