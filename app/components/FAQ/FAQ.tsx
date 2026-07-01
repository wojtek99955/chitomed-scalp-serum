import styles from "./Styles.module.css"

const faq = [
  {
    q: "Czy to jest lek na łysienie?",
    a: "Nie. To zaawansowany dermokosmetyk do skóry głowy. Nie zastępuje diagnostyki ani leczenia dermatologicznego, ale może być elementem świadomej pielęgnacji skóry głowy i włosów przerzedzonych.",
  },
  {
    q: "Dla kogo jest to serum?",
    a: "Dla osób, które widzą spadek gęstości, cieńsze włosy, osłabienie po stresie, sezonowe wypadanie, suchość skóry głowy albo potrzebują bardziej zaawansowanej pielęgnacji niż klasyczna wcierka.",
  },
  {
    q: "Czym różni się od zwykłej wcierki?",
    a: "Klasyczna wcierka zwykle opiera się na ekstraktach, kofeinie lub składnikach rozgrzewających. Tutaj komunikujemy technologię biomimetyczną: Peaureva™ z FGF-2 na oleosomach oraz MCC CHITOMED jako bioadhezyjną matrycę.",
  },
  {
    q: "Kiedy można oczekiwać pierwszych efektów?",
    a: "W badaniu składnika Peaureva™ parametry gęstości, stosunku anagen/telogen, grubości włosa i nawilżenia skóry głowy oceniano już po 28 dniach. Indywidualne efekty kosmetyku zależą od skóry głowy, regularności i przyczyny przerzedzenia.",
  },
];

const FAQ = () => {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqIntro}>
        <p className={styles.eyebrowDark}>FAQ</p>
        <h2>Najczęstsze pytania</h2>
      </div>

      <div className={styles.faqList}>
        {faq.map((item) => (
          <details className={styles.faqItem} key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ