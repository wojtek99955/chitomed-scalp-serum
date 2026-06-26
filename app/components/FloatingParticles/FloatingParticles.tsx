import type { CSSProperties } from "react";
import styles from "./Style.module.css";

const particles = Array.from({ length: 150 }, (_, index) => {
  const size = 4 + (index % 7) * 2;
  const left = (index * 37) % 100;
  const top = (index * 61) % 100;
  const duration = 14 + (index % 12) * 2;
  const delay = index * -0.45;
  const driftX = index % 2 === 0 ? 42 : -42;

  return {
    id: index,
    size,
    left,
    top,
    duration,
    delay,
    driftX,
  };
});

export default function FloatingParticles() {
  return (
    <div className={styles.particles} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={styles.particle}
          style={
            {
              "--size": `${particle.size}px`,
              "--left": `${particle.left}%`,
              "--top": `${particle.top}%`,
              "--duration": `${particle.duration}s`,
              "--delay": `${particle.delay}s`,
              "--drift-x": `${particle.driftX}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
