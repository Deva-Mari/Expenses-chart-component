import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer role="contentinfo" className={styles.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://devamari.com/" target="_blank" rel="noreferrer">
        Deva Mari
      </a>
      .
    </footer>
  );
};

export default Footer;
