import FloatingParticles from "./components/FloatingParticles/FloatingParticles";
import ProductPurchaseCTA from "./components/PurchaseCta/PurchaseCta";
import styles from "./hair.module.css";

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

const drivers = [
  {
    title: "Sygnały w mieszku",
    text: "spadek aktywności w obrębie brodawki skórnej może wpływać na cykl życia włosa",
  },
  {
    title: "Krótszy anagen",
    text: "włosy szybciej przechodzą w fazę spoczynku i tracą potencjał długości oraz gęstości",
  },
  {
    title: "Cieńsza łodyga",
    text: "włos staje się delikatniejszy, mniej sprężysty i wizualnie mniej pełny",
  },
  {
    title: "Skóra głowy",
    text: "suchość, dyskomfort, sebum i osłabiona bariera wpływają na środowisko wzrostu",
  },
];

const formula = [
  {
    tag: "01",
    title: "Peaureva™",
    text: "Francuska technologia FGF-2-oleosome fusion. Biomimetyczny czynnik wzrostu FGF-2 połączony z oleosomem roślinnym, zaprojektowany z myślą o skórze głowy.",
  },
  {
    tag: "02",
    title: "Chitozan mikrokrystaliczny CHITOMED",
    text: "Polski biomateriał o dodatnim ładunku, który przyciąga się do skóry i włosów. Tworzy delikatny, bioadhezyjny film na powierzchni skóry głowy.",
  },
  {
    tag: "03",
    title: "Formuła leave-on",
    text: "Serum bez spłukiwania, stworzone jako codzienny rytuał dla skóry głowy — nie tylko kosmetyczne wygładzenie łodygi włosa.",
  },
];

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

export default function HairSerumLanding() {
  return (
    <main className={styles.page}>
      <FloatingParticles />

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGridPattern} />

        <header className={styles.headerShell}>
          <div className={styles.headerInner}>
            <a
              href="/"
              className={styles.logo}
              aria-label="CHITOMED P.S.A. - strona główna">
              <span>CHITOMED</span>
              <small>P.S.A.</small>
            </a>

            <nav
              className={styles.navLinks}
              aria-label="Nawigacja landing page">
              <a href="#before-after">Efekty</a>
              <a href="#science">Technologia</a>
              <a href="#formula">Formuła</a>
              <a href="#order" className={styles.navCta}>
                Kup serum
              </a>
            </nav>
          </div>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.ratingPill}>
              <span>★★★★★</span>
              <p>Biotechnologiczne serum do skóry głowy</p>
            </div>

            <p className={styles.eyebrow}>Nowy dermokosmetyk scalp-first</p>

            <h1>
              Gęstsze włosy zaczynają się od skóry głowy.
              <span> Nie od obietnic.</span>
            </h1>

            <p className={styles.lead}>
              CHITOMED FGF-2 + MCC łączy francuską technologię Peaureva™
              FGF-2-oleosome fusion z polskim chitozanem mikrokrystalicznym. To
              codzienne serum leave-on dla skóry głowy, włosów przerzedzonych i
              utraty wizualnej gęstości.
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

                <div className={styles.clinicalCard}>
                  <strong>28 dni</strong>
                  <span>badanie składnika Peaureva™</span>
                </div>

                <div className={styles.studyCard}>
                  <strong>+33,6%</strong>
                  <span>gęstości włosów</span>
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

              <div className={styles.heroAssurances}>
                <div>
                  <span>01</span>
                  <p>bez minoksydylu</p>
                </div>
                <div>
                  <span>02</span>
                  <p>formuła leave-on</p>
                </div>
                <div>
                  <span>03</span>
                  <p>dla skóry głowy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

            <article
              className={`${styles.beforeAfterCard} ${styles.afterCard}`}>
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

      <section className={styles.metricsSection} id="results">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrowDark}>Składnik aktywny</p>
          <h2>
            Technologia, która podnosi oczekiwania wobec serum do skóry głowy.
          </h2>
          <p>
            Peaureva™ została oceniona w badaniu placebo-controlled.
            Najważniejsze parametry włosów i skóry głowy oceniano
            instrumentalnie już po 28 dniach stosowania formuły z aktywem.
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

      <section className={styles.problemSection}>
        <div className={styles.problemContent}>
          <p className={styles.eyebrowDark}>Dlaczego scalp-first?</p>
          <h2>Przerzedzenie włosów to nie tylko problem włosa.</h2>
          <p>
            Włosy stają się cieńsze, krótsze i mniej gęste, gdy zmienia się ich
            środowisko: faza wzrostu, bariera skóry głowy, poziom nawilżenia,
            sebum i sygnalizacja w obrębie mieszka włosowego.
          </p>
        </div>

        <div className={styles.driverList}>
          {drivers.map((driver) => (
            <article className={styles.driverItem} key={driver.title}>
              <span />
              <div>
                <strong>{driver.title}</strong>
                <p>{driver.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.scienceSection} id="science">
        <div className={styles.scienceHeader}>
          <p className={styles.eyebrow}>Technologia</p>
          <h2>
            Francuska biotechnologia wzrostu.
            <span> Polska technologia biomateriałowa.</span>
          </h2>
        </div>

        <div className={styles.scienceGrid}>
          <article className={styles.scienceCard}>
            <span className={styles.scienceNumber}>01</span>
            <h3>FGF-2 na oleosomie</h3>
            <p>
              Peaureva™ wykorzystuje FGF-2, czyli biomimetyczne białko
              sygnałowe, połączone z naturalnym oleosomem roślinnym. Oleosom
              pełni funkcję nośnika i stabilizatora aktywu.
            </p>
          </article>

          <article className={styles.scienceCard}>
            <span className={styles.scienceNumber}>02</span>
            <h3>Skóra głowy jako cel</h3>
            <p>
              Formuła jest projektowana dla środowiska mieszka włosowego, nie
              tylko dla kosmetycznego wygładzenia łodygi włosa. To podejście
              scalp-first.
            </p>
          </article>

          <article className={styles.scienceCard}>
            <span className={styles.scienceNumber}>03</span>
            <h3>MCC jako bioadhezyjna matryca</h3>
            <p>
              Chitozan mikrokrystaliczny CHITOMED ma dodatni ładunek, dlatego
              przyciąga się do skóry i włosów, tworząc delikatny film, który
              wspiera kontakt składników aktywnych ze skórą.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.formulaSection} id="formula">
        <div className={styles.formulaIntro}>
          <p className={styles.eyebrowDark}>Formuła</p>
          <h2>Trzy filary jednego serum.</h2>
          <p>
            Serum zostało pomyślane jako połączenie aktywnej biotechnologii,
            biomateriałowej matrycy i wygodnego codziennego rytuału dla skóry
            głowy.
          </p>
        </div>

        <div className={styles.formulaGrid}>
          {formula.map((item) => (
            <article className={styles.formulaCard} key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.compareSection}>
        <div className={styles.compareHeader}>
          <p className={styles.eyebrowDark}>Porównanie</p>
          <h2>Nie kolejna wcierka. Biotechnologiczne wsparcie skóry głowy i wzrostu włosów.</h2>
        </div>

        <div className={styles.compareGrid}>
          <article className={styles.compareMuted}>
            <h3>Typowa wcierka</h3>
            <ul>
              <li>oparta głównie na ekstraktach lub kofeinie</li>
              <li>często skupiona na uczuciu chłodzenia lub rozgrzania</li>
              <li>krótkotrwałe uczucie świeżości</li>
              <li>komunikacja bez głębszej narracji technologicznej</li>
            </ul>
          </article>

          <article className={styles.compareActive}>
            <h3>CHITOMED FGF-2 + MCC</h3>
            <ul>
              <li>biomimetyczny FGF-2 w technologii oleosome fusion</li>
              <li>chitozan mikrokrystaliczny jako bioadhezyjny biomateriał</li>
              <li>
                podejście scalp-first: skóra głowy, bariera, mieszek, łodyga
              </li>
              <li>narracja oparta na biotechnologii i danych składnika</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.brandSection}>
        <div className={styles.brandVisual}>
          <div className={styles.labCard}>
            <span>CHITOMED P.S.A.</span>
            <h3>Biomateriały z własnego laboratorium</h3>
            <p>
              CHITOMED rozwija technologie chitozanowe dla kosmetyków, wyrobów
              medycznych i zastosowań specjalistycznych.
            </p>
          </div>
        </div>

        <div className={styles.brandContent}>
          <p className={styles.eyebrowDark}>Kto za tym stoi</p>
          <h2>Polska technologia MCC, rozwijana przez CHITOMED.</h2>
          <p>
            RegCare i CHITOMED nie budują komunikacji wyłącznie na modnych
            składnikach. Rdzeniem marki jest własny biomateriał — chitozan
            mikrokrystaliczny — przetwarzany i rozwijany we własnym zapleczu
            technologicznym.
          </p>
          <p>
            Nowe serum przenosi tę filozofię na skórę głowy: zamiast obiecywać
            cud, pokazuje mechanizm, technologię i świadomie zaprojektowaną
            formułę.
          </p>
        </div>
      </section>

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

      <ProductPurchaseCTA productUrl="/pl/p/serum-chitomed-fgf-2-mcc" />

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
    </main>
  );
}
