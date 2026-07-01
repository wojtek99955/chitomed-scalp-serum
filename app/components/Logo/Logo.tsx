import { Albert_Sans } from "next/font/google";
import styles from "./Style.module.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const Logo = () => {
  return (
    <div
      className={`${styles.logo} ${albertSans.className}`}
      aria-label="biofollis">
      biofollis
    </div>
  );
};

export default Logo;
