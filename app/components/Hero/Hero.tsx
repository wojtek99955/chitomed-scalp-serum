import styles from "./Styles.module.css";
import Link from "next/link";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroGridPattern} />

      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Nowy dermokosmetyk scalp-first</p>

          <h1>
            Innowacyjne serum na porost i gęstość włosów.
            <span> Zaprojektowane od skóry głowy.</span>
          </h1>
          <br />
          <div className={styles.ratingPill}>
            <span>★★★★★</span>
            <p>Biotechnologiczna formuła FGF-2 + MCC</p>
          </div>
          <p className={styles.lead}>
            CHITOMED FGF-2 + MCC łączy technologię Peaureva™
            FGF-2-oleosome fusion z chitozanem mikrokrystalicznym. To
            codzienne serum bez spłukiwania stworzone dla osób, które chcą
            działać u źródła.
          </p>

          <div className={styles.heroActions}>
            <a href="#order" className={styles.primaryBtn}>
              Kup serum
            </a>
            <a href="#results" className={styles.secondaryBtn}>
              Zobacz wyniki
            </a>
          </div>

          <div className={styles.trustLine}>
            <span>Peaureva™</span>
            <span>FGF-2</span>
            <span>Oleosomes</span>
            <span>MCC CHITOMED</span>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Wizualizacja serum">
          <div className={styles.visualCard}>
            <div className={styles.visualTop}>
              <span>Scalp serum</span>
              <strong>FGF-2 + MCC</strong>
            </div>

            <div className={styles.heroBottleStage}>
              <div className={styles.orbitOne} />
              <div className={styles.orbitTwo} />
              <div className={styles.productHalo} />

              <div className={styles.clinicalCard}>
                <strong>28 dni</strong>
                <span>badanie składnika Peaureva™</span>
              </div>

              <div className={styles.studyCard}>
                <strong>+33,6%</strong>
                <span>gęstości włosów</span>
              </div>

              <div className={styles.techPlate}>
                <span>Bioadhezyjna matryca</span>
                <strong>MCC</strong>
              </div>

              <div className={styles.bottleWrap}>
                <div className={styles.bottleCap} />
                <div className={styles.bottle}>
                  <small>CHITOMED</small>
                  <strong>FGF-2</strong>
                  <span>MCC scalp serum</span>
                </div>
                <div className={styles.bottleShadow} />
              </div>

              <div className={styles.particleOne} />
              <div className={styles.particleTwo} />
              <div className={styles.particleThree} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
