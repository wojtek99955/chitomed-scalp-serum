import styles from "./Style.module.css";

type ProductPurchaseCTAProps = {
  productUrl: string;
};

const benefits = [
  {
    title: "FGF-2 + Peaureva™",
    text: "biomimetyczny czynnik wzrostu w technologii oleosome fusion",
  },
  {
    title: "MCC CHITOMED",
    text: "chitozan mikrokrystaliczny jako bioadhezyjna matryca",
  },
  {
    title: "Scalp-first",
    text: "formuła leave-on projektowana dla skóry głowy",
  },
];

const assurances = [
  "Bez minoksydylu",
  "Kosmetyk leave-on",
  "Dla skóry głowy",
];

const quickFacts = [
  {
    value: "28 dni",
    label: "pierwsze parametry składnika",
  },
  {
    value: "+33,6%",
    label: "gęstości włosów",
  },
  {
    value: "leave-on",
    label: "bez spłukiwania",
  },
];

export default function ProductPurchaseCTA({
  productUrl,
}: ProductPurchaseCTAProps) {
  return (
    <section className={styles.purchaseSection} id="order">
      <div className={styles.softGlow} />
      <div className={styles.gridLine} />

      <div className={styles.container}>
        <div className={styles.visualPanel} aria-label="Wizualizacja produktu">
          <div className={styles.visualHeader}>
            <span>CHITOMED scalp biotechnology</span>
            <strong>FGF-2</strong>
          </div>

          <div className={styles.productStage}>
            <div className={styles.orbitOne} />
            <div className={styles.orbitTwo} />

            <div className={styles.statCard}>
              <span>28 dni</span>
              <p>pierwsze mierzalne parametry w badaniu składnika</p>
            </div>

            <div className={styles.microCard}>
              <span>+33,6%</span>
              <p>gęstości włosów</p>
            </div>

            <div className={styles.dropper}>
              <div className={styles.dropperTop} />
              <div className={styles.dropperNeck} />
              <div className={styles.bottle}>
                <div className={styles.bottleLabel}>
                  <small>CHITOMED</small>
                  <strong>FGF-2</strong>
                  <span>MCC scalp serum</span>
                </div>
              </div>
              <div className={styles.shadow} />
            </div>
          </div>

          <div className={styles.bottomSpecs}>
            <div>
              <span>01</span>
              <p>Peaureva™</p>
            </div>
            <div>
              <span>02</span>
              <p>Oleosomes</p>
            </div>
            <div>
              <span>03</span>
              <p>Microcrystalline chitosan</p>
            </div>
          </div>
        </div>

        <aside className={styles.buyPanel}>
          <div className={styles.ratingLine}>
            <span>★★★★★</span>
            <p>Biotechnologiczne serum do skóry głowy</p>
          </div>

          <p className={styles.eyebrow}>Dostępne teraz</p>

          <h2>
            CHITOMED FGF-2 + MCC
            <span> dla skóry głowy.</span>
          </h2>

          <p className={styles.lead}>
            Nowa generacja pielęgnacji scalp-first: francuska technologia
            Peaureva™ połączona z polskim chitozanem mikrokrystalicznym
            CHITOMED.
          </p>

          <div className={styles.quickFacts} aria-label="Szybkie podsumowanie produktu">
            {quickFacts.map((fact) => (
              <div key={fact.value}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.choiceBox}>
            <div>
              <span>Rekomendowany start</span>
              <strong>1 opakowanie serum</strong>
              <p>codzienny rytuał leave-on dla skóry głowy</p>
            </div>

            <b>Premiera</b>
          </div>

          <div className={styles.benefitList}>
            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <span />
                <div>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>

          <a href={productUrl} className={styles.buyButton}>
            Kup teraz
          </a>

          <div className={styles.assuranceGrid}>
            {assurances.map((item) => (
              <div key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className={styles.note}>
            Produkt kosmetyczny. Nie zastępuje konsultacji dermatologicznej ani
            leczenia przyczyn nadmiernego wypadania włosów.
          </p>
        </aside>
      </div>
    </section>
  );
}
