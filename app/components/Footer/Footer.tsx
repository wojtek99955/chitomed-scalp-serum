import styles from "./Style.module.css";

const footerLinks = [
  { label: "Efekty", href: "#before-after" },
  { label: "Innowacja", href: "#innovation" },
  { label: "Technologia", href: "#science" },
  { label: "Formuła", href: "#formula" },
  { label: "Zamów serum", href: "#order" },
];

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
      <section className={styles.finalCta}>
        <div className={styles.finalGlow} />

        <div className={styles.finalCtaInner}>
          <p className={styles.eyebrow}>CHITOMED scalp biotechnology</p>

          <h2>Nie maskuj problemu. Zacznij działać u źródła.</h2>

          <p className={styles.finalLead}>
            Serum leave-on stworzone z myślą o skórze głowy — oparte na
            technologii biomateriałowej CHITOMED i składnikach wspierających
            codzienną pielęgnację.
          </p>

          <div className={styles.finalActions}>
            <a href="#order" className={styles.primaryBtn}>
              Zamów serum
            </a>

            <a href="#science" className={styles.secondaryBtn}>
              Poznaj technologię
            </a>
          </div>

          <div className={styles.finalTrust}>
            <span>Bez minoksydylu</span>
            <span>Kosmetyk leave-on</span>
            <span>Scalp-first formula</span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <a
              href="/"
              className={styles.footerLogo}
              aria-label="CHITOMED P.S.A.">
              <span>CHITOMED</span>
              <small>P.S.A.</small>
            </a>

            <p>
              Biomateriałowa technologia pielęgnacji skóry głowy. Rozwiązania
              inspirowane nauką, projektowane z myślą o codziennym stosowaniu.
            </p>

            <div className={styles.footerBadges}>
              <span>Biomateriały</span>
              <span>Chitozan</span>
              <span>Scalp care</span>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Nawigacja</h3>

            <nav className={styles.footerNav} aria-label="Nawigacja stopki">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.footerColumn}>
            <h3>Dane firmy</h3>

            <address className={styles.companyData}>
              <strong>CHITOMED PROSTA SPÓŁKA AKCYJNA</strong>
              <span>ul. Jana Henryka Dąbrowskiego 77/A</span>
              <span>60-529 Poznań, Polska</span>
              <span>NIP: 7812083505</span>
              <span>KRS: 0001152507</span>
              <span>REGON: 540799054</span>
            </address>
          </div>

          <div className={styles.newsletterBox}>
            <h3>Newsletter</h3>

            <p>
              Zapisz się, aby otrzymywać informacje o premierach, promocjach i
              nowych materiałach edukacyjnych CHITOMED.
            </p>

            <form
              className={styles.newsletterForm}
              action="/api/newsletter"
              method="post">
              <label htmlFor="footer-email" className={styles.srOnly}>
                Adres e-mail
              </label>

              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Twój adres e-mail"
                required
              />

              <button type="submit">Zapisz się</button>
            </form>

            <small>
              Zapisując się, akceptujesz otrzymywanie informacji marketingowych.
              W każdej chwili możesz zrezygnować.
            </small>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            Produkt kosmetyczny. Materiały mają charakter informacyjny i
            marketingowy. Serum nie jest produktem leczniczym i nie zastępuje
            konsultacji z dermatologiem.
          </p>

          <div className={styles.legalLinks}>
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
            <a href="/regulamin">Regulamin</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
