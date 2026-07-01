import styles from "./Style.module.css"


const metrics = [
  {
    value: "+33,6%",
    label: "gęstości włosów",
    note: "wynik po 28 dniach w badaniu Peaureva™",
  },
  {
    value: "+14,0%",
    label: "anagen/telogen ratio",
    note: "więcej włosów w aktywnej fazie wzrostu",
  },
  {
    value: "+5,0%",
    label: "grubości łodygi włosa",
    note: "parametr mierzony instrumentalnie",
  },
  {
    value: "+17,5%",
    label: "nawilżenia skóry głowy",
    note: "pomiar Corneometer",
  },
];

const Ingredient = () => {
  return (
    <section className={styles.metricsSection} id="results">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrowDark}>Składnik aktywny</p>
        <h2>
          Technologia, która podnosi oczekiwania wobec serum do skóry głowy.
        </h2>
        <p>
          Peaureva™ została oceniona w badaniu placebo-controlled. Najważniejsze
          parametry włosów i skóry głowy oceniano instrumentalnie już po 28
          dniach stosowania formuły z aktywem.
        </p>
      </div>

      <div className={styles.metricsGrid}>
        {metrics.map((item, index) => (
          <article
            className={`${styles.metricCard} ${
              index === 0 ? styles.metricCardFeatured : ""
            }`}
            key={item.label}>
            <span>Study result</span>
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.note}</p>
          </article>
        ))}
      </div>

      <p className={styles.disclaimer}>
        Dane dotyczą badania składnika Peaureva™ / formuły testowej. Finalne
        działanie gotowego kosmetyku zależy od pełnej receptury, regularności
        stosowania i indywidualnej kondycji skóry głowy.
      </p>
    </section>
  );
}

export default Ingredient