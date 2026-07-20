import styles from "./../../assets/style/Contact.module.css";
import { motion } from "framer-motion";
import { fadeUp } from "../../../src/animations/animations";

export default function Contact() {

    const myNumber = +996702256437
    const telegram = 'syoma_sh';

    return (
        <section className={styles.contact} id="contact">
            <motion.div className={styles.container}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <span className={styles.sectionName}>
                    Contact
                </span>

                <h2 className={styles.title}>
                    Давай создадим
                    что-то сильное вместе.
                </h2>

                <p className={styles.description}>
                    Открыт для frontend вакансий,
                    стажировок и интересных проектов.
                </p>

                <div className={styles.links}>

                    <a
                        href="https://github.com/syimykDev00"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href={`https://wa.me/${myNumber}?text=%20Здравствуйте...`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Whatsapp
                    </a>

                    <a
                        href={`https://telegram.me/${telegram}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Telegram
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=syimykshailoobek@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Email
                    </a>

                </div>

            </motion.div>
        </section>
    );
}