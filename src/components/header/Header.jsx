import styles from "../../assets/style/Header.module.css";
import { useState } from 'react';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const myNumber = '996702256437'

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Syimyk<span className={styles.span}>Dev</span>
        </div>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.active : ''
            }`}
        >
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a
          href={`https://wa.me/${myNumber}?text=%20Здравствуйте...`}
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.button}>
            Contact
          </button>
        </a>
        <div
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}