import styles from "./../../assets/style/Skiils.module.css";
import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "../../../src/animations/animations";

const skillsData = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "JavaScript", 'Redux-toolkit', 'HTML'],
  },

  {
    title: "Styling",
    skills: ["CSS", "SCSS", "Tailwind CSS", "Responsive Design", "Styled-components"],
  },

  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>

        <div className={styles.top}>
          <span className={styles.sectionName}>
            Skills
          </span>

          <h2 className={styles.title}>
            Технологии и инструменты,
            с которыми я работаю.
          </h2>
        </div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((item) => (
            <motion.div 
            className={styles.card} key={item.title}
            variants={fadeUp}
            >
              <h3>{item.title}</h3>

              <div className={styles.items}>
                {item.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}