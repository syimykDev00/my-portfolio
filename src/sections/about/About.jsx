import styles from "../../assets/style/About.module.css";
import {motion} from 'framer-motion';
import { fadeUp } from "../../animations/animations";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <motion.div 
      className={styles.container}
      variants={fadeUp}
      initial='hidden'
      whileInView={'visible'}
      viewport={{once: true}}
      >
        
        <div className={styles.left}>
          <span className={styles.sectionName}>
            About Me
          </span>

          <h2 className={styles.title}>
            Создаю интерфейсы,
            которые выглядят современно
            и ощущаются удобно.
          </h2>
        </div>

        <div className={styles.right}>
          <p>
            Я frontend developer, сфокусированный
            на React и TypeScript разработке.

            Люблю создавать чистые интерфейсы,
            продуманную архитектуру компонентов
            и современный пользовательский опыт.
          </p>

          <p>
            Сейчас продолжаю углубляться в frontend:
            Next.js, производительность,
            scalable architecture и лучшие практики разработки.
          </p>
        </div>

      </motion.div>
    </section>
  );
}