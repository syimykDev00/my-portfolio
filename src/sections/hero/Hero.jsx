import styles from "../../assets/style/Hero.module.css";
import { motion } from 'framer-motion';

import {
  fadeUp,
} from '../../animations/animations';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          className={styles.content}>
          <span className={styles.subtitle}>
            Frontend Developer
          </span>

          <h1 className={styles.title}>
            Создаю современные
            <br />
            веб-приложения
          </h1>

          <p className={styles.description}>
            Специализируюсь на React, TypeScript и создании
            современных пользовательских интерфейсов
            с чистой архитектурой и плавным UX.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              Смотреть проекты
            </a>

            <a
              href="https://github.com/syimykDev00"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <div className={styles.visual}>
          <div className={styles.glow}></div>

          <div className={styles.card}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Javascript</span>
            <span>Redux-toolkit</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>GIT</span>
            <span>DOM</span>
          </div>
        </div>

      </div>
    </section>
  );
}