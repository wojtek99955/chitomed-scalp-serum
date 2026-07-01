import styles from "./Styles.module.css";

const usage = [
  {
    step: "01",
    title: "Aplikuj na skórę głowy",
    text: "Nakładaj serum bezpośrednio na skórę głowy, szczególnie w miejscach, gdzie włosy są cieńsze lub mniej gęste.",
  },
  {
    step: "02",
    title: "Wmasuj opuszkami",
    text: "Krótki masaż pomaga równomiernie rozprowadzić formułę i zamienić aplikację w codzienny rytuał.",
  },
  {
    step: "03",
    title: "Nie spłukuj",
    text: "Pozostaw serum na skórze głowy. Formuła została zaprojektowana jako pielęgnacja leave-on.",
  },
];

const HowToUse = () => {
  return (
    <section className={styles.usageSection}>
      <div className={styles.usageIntro}>
        <p className={styles.eyebrowDark}>Rytuał</p>
        <h2>Jak stosować?</h2>
      </div>

      <div className={styles.usageSteps}>
        {usage.map((item) => (
          <article key={item.title}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowToUse