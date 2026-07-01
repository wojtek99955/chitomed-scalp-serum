import styles from "./Style.module.css"

const Footer = () => {
  return (
    <div>
      <section className={styles.finalCta}>
        <p className={styles.eyebrow}>CHITOMED scalp biotechnology</p>
        <h2>Nie maskuj problemu. Zacznij działać u źródła.</h2>{" "}
        <a href="#order" className={styles.primaryBtn}>
          Zamów serum
        </a>
      </section>
      <footer className={styles.footer}>
        <p>
          Produkt kosmetyczny. Materiały mają charakter informacyjny i
          marketingowy. Serum nie jest produktem leczniczym i nie zastępuje
          konsultacji z dermatologiem.
        </p>
      </footer>
    </div>
  );
}

export default Footer