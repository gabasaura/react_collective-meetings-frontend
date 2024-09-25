
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>GABA 2024</p>
        <a href="mailto:contact@example.com">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;