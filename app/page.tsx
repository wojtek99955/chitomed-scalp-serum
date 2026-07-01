import Link from "next/link";

import FloatingParticles from "./components/FloatingParticles/FloatingParticles";
import ProductPurchaseCTA from "./components/PurchaseCta/PurchaseCta";
import styles from "./hair.module.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Ingredient from "./components/Ingredient/Ingredient";
import HowToUse from "./components/HowToUse/HowToUse";


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

const innovationFeatures = [
  {
    label: "Biomimetyka",
    title: "FGF-2 w technologii oleosome fusion",
    text: "Aktyw komunikowany jak technologia, nie modny ekstrakt. Peaureva™ łączy FGF-2 z roślinnym oleosomem dla formuły zaprojektowanej z myślą o skórze głowy.",
  },
  {
    label: "Bioadhezja",
    title: "MCC CHITOMED jako inteligentna matryca",
    text: "Chitozan mikrokrystaliczny wspiera kontakt serum ze skórą i włosami, tworząc delikatny film bez ciężkiego, tłustego wykończenia.",
  },
  {
    label: "Scalp-first",
    title: "Rytuał u źródła przerzedzenia",
    text: "Serum działa tam, gdzie zaczyna się kondycja włosów: przy skórze głowy, mieszku włosowym, barierze i mikrośrodowisku wzrostu.",
  },
  {
    label: "Leave-on",
    title: "Codzienna aplikacja bez spłukiwania",
    text: "Formuła pasuje do regularnego rytuału: precyzyjna aplikacja, krótki masaż i pozostawienie serum na skórze głowy.",
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



export default function HairSerumLanding() {
  return (
    <main className={styles.page}>
      <FloatingParticles />
      <Header />
      <Hero />
      <Results/>

      <section className={styles.innovationSection} id="innovation">
        <div className={styles.innovationShell}>
          <div className={styles.innovationIntro}>
            <p className={styles.eyebrowDark}>Innowacja</p>
            <h2>
              Od pierwszego scrolla ma być jasne:
              <span> to nie jest zwykła wcierka.</span>
            </h2>
            <p>
              Sekcja pokazuje mechanizm w prostym języku: technologia,
              bioadhezja, codzienny rytuał i powód, dla którego serum działa u
              źródła wizualnej gęstości włosów.
            </p>
          </div>

          <div className={styles.innovationGrid}>
            {innovationFeatures.map((feature) => (
              <article className={styles.innovationCard} key={feature.title}>
                <span>{feature.label}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Ingredient/>

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
          <h2>
            Nie kolejna wcierka. Biotechnologiczne wsparcie skóry głowy i
            wzrostu włosów.
          </h2>
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

<HowToUse/>

      <ProductPurchaseCTA productUrl="/pl/p/serum-chitomed-fgf-2-mcc" />

<FAQ/>
      <Footer/>
    </main>
  );
}
