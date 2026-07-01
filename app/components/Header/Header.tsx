import Link from "next/link";
import styles from "./Styles.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.headerShell}>
      <div className={styles.headerInner}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="CHITOMED P.S.A. - strona główna">
            <Logo/>
        </Link>
        <nav className={styles.navLinks} aria-label="Nawigacja landing page">
          <a href="#before-after">Efekty</a>
          <a href="#innovation">Innowacja</a>
          <a href="#science">Technologia</a>
          <a href="#formula">Formuła</a>
          <a href="#order" className={styles.navCta}>
            Kup serum
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
