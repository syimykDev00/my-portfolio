import styles from "./../../assets/style/Projects.module.css";
import { motion } from "framer-motion";
import schoolImg from "../../assets/img/school.png";
import clinicImg from "../../assets/img/clinic.png";
import neoImg from "../../assets/img/neoavia.png";
import navisImg from "../../assets/img/navis.png";
import tourImg from '../../assets/img/tour.png';
import gruzoExpressImg from '../../assets/img/gruzo-express.png';
import tintingCarImg from '../../assets/img/tinting-car.png';
import attorneysterImg from '../../assets/img/attorneyster.png';
import codeSphereImg from '../../assets/img/codesphere.png';

import {
    fadeUp,
    staggerContainer,
} from "../../../src/animations/animations";

const projects = [
    {
        title: "CodeSphere Academy",
        description:
            "Современный адаптивный лендинг для IT-aкадемии с лаконичным дизайном, плавными анимациями и удобной навигацией.",

        image: codeSphereImg,

        stack: ["React", "Typescript", "CSS", 'Framer-Motion'],

        live: "https://codesphere-nu.vercel.app/",
        github: "https://github.com/syimykDev00/react-ts-landing",
    },

    {
        title: "Oasia",
        description:
            "Клиентская веб-платформа для просмотра туристических направлений и туров, разработанная в рамках командного проекта.",

        image: tourImg,

        stack: ["React", "Javascript", "CSS", "Responsive"],

        live: "https://oasiia-uxum.vercel.app/",
        github: "https://github.com/asanbaev01/Oasiia",
    },

    {
        title: "Gruzo Express",
        description:
            "Проект по созданию сайта для сервиса грузоперевозок с акцентом на удобный пользовательский интерфейс и структурированную подачу информации.",

        image: gruzoExpressImg,

        stack: ["HTML", "CSS", "Responsive"],

        live: "https://gruzo-express-two-h6w7.vercel.app/",
        github: "https://github.com/syimykDev00/gruzo-express-two",
    },

    {
        title: "Neo Avia Company",
        description:
            "Корпоративный авиационный сайт с современным дизайном и responsive layout.",

        image: neoImg,

        stack: ["React", "JavaScript", "CSS"],

        live: "https://air-ticket-rho.vercel.app/",
        github: "https://github.com/syimykDev00/air-ticket",
    },

    {
        title: "Navis Asset",
        description:
            "Финансовый веб-сервис с акцентом на минималистичный интерфейс и UX.",

        image: navisImg,

        stack: ["React", "JavaScript", "SCSS"],

        live: "https://navis-asset-v4wg.vercel.app/",
        github: "https://github.com/syimykDev00/navis-asset-two",
    },

     {
        title: "School",
        description:
            "Современная образовательная платформа с адаптивным интерфейсом и чистой UI архитектурой.",

        image: schoolImg,

        stack: ["React", "Styled-components", "Responsive"],

        live: "https://school-seven-pied.vercel.app/",
        github: "https://github.com/syimykDev00/school",
    },

    {
        title: "Aidarov Clinic",
        description:
            "Сайт стоматологической клиники с современным интерфейсом и удобной навигацией.",

        image: clinicImg,

        stack: ["React", "SCSS", "UI/UX"],

        live: "https://clinic-wheat.vercel.app/",
        github: "https://github.com/syimykDev00/clinic",
    },

    {
        title: "Tinting Car",
        description:
            "Веб-платформа для сервиса автомобильной тонировки, ориентированная на презентацию услуг и удобство пользователей.",

        image: tintingCarImg,

        stack: ["HTML", "CSS", "Responsive"],

        live: "https://tinting-car.vercel.app/",
        github: "https://github.com/syimykDev00/gruzo-express-two",
    },

    {
        title: "Attorneyster",
        description:
            "Современный веб-сайт юридической компании с понятной навигацией и удобной подачей информации.",

        image: attorneysterImg,

        stack: ["HTML", "CSS", "Responsive"],

        live: "https://attorneyster-cyan.vercel.app/",
        github: "https://github.com/syimykDev00/attorneyster/tree/master",
    },
];

export default function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>

                <div className={styles.top}>
                    <span className={styles.sectionName}>
                        Projects
                    </span>

                    <h2 className={styles.title}>
                        Проекты, над которыми я работал.
                    </h2>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project) => (
                        <motion.div
                            className={styles.card} key={project.title}
                            variants={fadeUp}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>

                            <div className={styles.content}>
                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className={styles.stack}>
                                    {project.stack.map((item) => (
                                        <span key={item}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.buttons}>
                                    <a href={project.live} className={styles.demo}>
                                        Live Demo
                                    </a>

                                    <a href={project.github}>
                                        GitHub
                                    </a>
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}