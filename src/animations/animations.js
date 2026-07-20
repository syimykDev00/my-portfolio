import { animations } from "framer-motion";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -12, 0],

    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default animations;