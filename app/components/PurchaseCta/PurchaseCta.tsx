import styles from "./Style.module.css";

type ProductPurchaseCTAProps = {
  productUrl: string;
};

export default function ProductPurchaseCTA({
  productUrl,
}: ProductPurchaseCTAProps) {
  return (
    <section className={styles.purchaseSection} id="order">
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Dostępne teraz</p>

          <h2>
            Biotechnologiczne serum do skóry głowy.
            <span> Kup teraz.</span>
          </h2>

          <p className={styles.lead}>
            CHITOMED FGF-2 + MCC to nowa generacja pielęgnacji skóry głowy:
            francuska technologia Peaureva™ połączona z polskim chitozanem
            mikrokrystalicznym CHITOMED.
          </p>

          <div className={styles.points}>
            <div>
              <strong>FGF-2</strong>
              <span>biomimetyczny czynnik wzrostu</span>
            </div>

            <div>
              <strong>MCC</strong>
              <span>chitozan mikrokrystaliczny CHITOMED</span>
            </div>

            <div>
              <strong>Scalp-first</strong>
              <span>formuła projektowana dla skóry głowy</span>
            </div>
          </div>
        </div>

        <aside className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.status}>W sprzedaży</span>
            <span className={styles.badge}>Biotech serum</span>
          </div>

          <div className={styles.productVisual}>
            <div className={styles.cap} />
            <div className={styles.bottle}>
              <small>CHITOMED</small>
              <strong>FGF-2</strong>
              <span>MCC scalp serum</span>
            </div>
          </div>

          <div className={styles.productInfo}>
            <p>Serum do skóry głowy</p>
            <h3>CHITOMED FGF-2 + MCC</h3>
            <span>Peaureva™ · Oleosomes · Chitozan mikrokrystaliczny</span>
          </div>

          <a href={productUrl} className={styles.buyButton}>
            Kup teraz
          </a>

          <p className={styles.note}>
            Produkt kosmetyczny. Nie zastępuje konsultacji dermatologicznej ani
            leczenia przyczyn nadmiernego wypadania włosów.
          </p>
        </aside>
      </div>
    </section>
  );
}
