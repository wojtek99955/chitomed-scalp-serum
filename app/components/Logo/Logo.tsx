import Link from "next/link";
import { Albert_Sans } from "next/font/google";
import styles from "./Style.module.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

type LogoProps = {
  variant?: "green" | "black" | "white";
  href?: string;
  className?: string;
};

const Logo = ({ variant = "black", href, className = "" }: LogoProps) => {
  const logoClassName = [
    styles.logo,
    styles[variant],
    albertSans.className,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={logoClassName} aria-label="biofollis">
        biofollis
      </Link>
    );
  }

  return (
    <div className={logoClassName} aria-label="biofollis">
      biofollis
    </div>
  );
};

export default Logo;
