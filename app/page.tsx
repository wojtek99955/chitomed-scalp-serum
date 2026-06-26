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
  "spadek sygnalizacji w obrębie brodawki skórnej",
  "skrócenie fazy anagenu",
  "cieńsza łodyga włosa",
  "osłabione środowisko skóry głowy",
  "suchość, dyskomfort i nadmiar sebum",
];

const formula = [
  {
    tag: "01",
    title: "Peaureva™",
    text: "Francuska technologia FGF-2-oleosome fusion. Biomimetyczny czynnik wzrostu FGF-2 połączony z oleosomem roślinnym, zaprojektowany z myślą o skórze głowy i mieszkach włosowych.",
  },
  {
    tag: "02",
    title: "Chitozan mikrokrystaliczny CHITOMED",
    text: "Polski biomateriał o dodatnim ładunku, który przyciąga się do skóry i włosów. Tworzy delikatny, bioadhezyjny film i wspiera kontakt składników aktywnych z powierzchnią skóry głowy.",
  },
  {
    tag: "03",
    title: "Serum scalp-first",
    text: "Formuła nie jest tworzona wyłącznie pod włos. Jej celem jest środowisko skóry głowy — miejsce, w którym zaczyna się jakość, gęstość i kondycja włosa.",
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

        <header className={styles.nav}>
          <div className={styles.logo}>
            <span>CHITOMED</span>
            <small>P.S.A.</small>
          </div>

          <nav className={styles.navLinks} aria-label="Nawigacja landing page">
            <a href="#science">Technologia</a>
            <a href="#results">Wyniki</a>
            <a href="#formula">Formuła</a>
            <a href="#order">Zamów</a>
          </nav>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Nowy dermokosmetyk do skóry głowy</p>

            <h1>
              Rewolucja dla włosów zaczyna się nie od włosa.
              <span> Zaczyna się od skóry głowy.</span>
            </h1>

            <p className={styles.lead}>
              Serum CHITOMED łączy francuską technologię Peaureva™
              FGF-2-oleosome fusion z polskim chitozanem mikrokrystalicznym. To
              nowa generacja pielęgnacji scalp-first: biomimetyczna,
              bioadhezyjna i zaprojektowana dla włosów, które tracą gęstość,
              grubość i witalność.
            </p>

            <div className={styles.heroActions}>
              <a href="#order" className={styles.primaryBtn}>
                Dołącz do premiery
              </a>
              <a href="#science" className={styles.secondaryBtn}>
                Poznaj technologię
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
              <div className={styles.badge}>Biotech scalp serum</div>

              <div className={styles.bottleWrap}>
                <div className={styles.bottleCap} />
                <div className={styles.bottle}>
                  <span>FGF-2</span>
                  <strong>MCC</strong>
                  <small>scalp serum</small>
                </div>
                <div className={styles.bottleShadow} />
              </div>

              <div className={styles.orbitOne} />
              <div className={styles.orbitTwo} />
              <div className={styles.particleOne} />
              <div className={styles.particleTwo} />
              <div className={styles.particleThree} />
            </div>

            <div className={styles.heroStat}>
              <strong>28 dni</strong>
              <span>
                pierwsze mierzalne parametry w badaniu składnika Peaureva™
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metricsSection} id="results">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrowDark}>Dane składnika aktywnego</p>
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
          <p className={styles.eyebrowDark}>Problem</p>
          <h2>Przerzedzenie włosów to nie tylko „słaby włos”.</h2>
          <p>
            Włosy stają się cieńsze, krótsze i mniej gęste, gdy zmienia się
            środowisko skóry głowy: faza wzrostu, sygnalizacja komórkowa,
            bariera naskórkowa, poziom nawilżenia i sebum.
          </p>
        </div>

        <div className={styles.driverList}>
          {drivers.map((driver) => (
            <div className={styles.driverItem} key={driver}>
              <span />
              <p>{driver}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.scienceSection} id="science">
        <div className={styles.scienceHeader}>
          <p className={styles.eyebrow}>Dlaczego to jest inne</p>
          <h2>
            Francuska biotechnologia wzrostu.
            <br />
            Polska technologia biomateriałowa.
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
              wspiera komfort i kontakt składników aktywnych ze skórą.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.formulaSection} id="formula">
        <div className={styles.formulaIntro}>
          <p className={styles.eyebrowDark}>Formuła</p>
          <h2>Dwa światy. Jedna technologia skóry głowy.</h2>
          <p>
            Serum zostało pomyślane jako połączenie aktywnej biotechnologii i
            biomateriałowej matrycy. Peaureva™ daje sygnał. MCC pomaga stworzyć
            środowisko, w którym formuła dobrze przylega do skóry głowy.
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
          <h2>Nie kolejna wcierka. Nowy standard serum do skóry głowy.</h2>
        </div>

        <div className={styles.compareGrid}>
          <article className={styles.compareMuted}>
            <h3>Typowa wcierka</h3>
            <ul>
              <li>oparta głównie na ekstraktach lub kofeinie</li>
              <li>często skupiona na uczuciu chłodzenia lub rozgrzania</li>
              <li>
                marketing „na porost”, bez głębszej narracji technologicznej
              </li>
              <li>krótkotrwałe uczucie świeżości</li>
            </ul>
          </article>

          <article className={styles.compareActive}>
            <h3>Serum CHITOMED FGF-2 + MCC</h3>
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
        <div>
          <p className={styles.eyebrowDark}>Rytuał</p>
          <h2>Jak stosować?</h2>
        </div>

        <div className={styles.usageSteps}>
          <article>
            <span>1</span>
            <h3>Na skórę głowy</h3>
            <p>
              Aplikuj serum bezpośrednio na skórę głowy, szczególnie w
              miejscach, gdzie włosy są cieńsze lub mniej gęste.
            </p>
          </article>

          <article>
            <span>2</span>
            <h3>Codzienna konsekwencja</h3>
            <p>
              W pielęgnacji skóry głowy regularność jest ważniejsza niż ilość.
              Najlepszy efekt komunikacyjny daje rytuał minimum 28 dni.
            </p>
          </article>

          <article>
            <span>3</span>
            <h3>Bez spłukiwania</h3>
            <p>
              Wmasuj opuszkami palców i pozostaw. Formuła została zaprojektowana
              jako serum leave-on do skóry głowy.
            </p>
          </article>
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
        <h2>Przyszłość pielęgnacji włosów będzie biologiczna.</h2>
        <a href="#order" className={styles.primaryBtn}>
          Chcę być na liście premiery
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