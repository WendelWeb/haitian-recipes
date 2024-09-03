import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}
    >
      <p>Copyright © 2024 Haitian Recipes | Stanley Wendel, Inc.</p>
    </footer>
  );
}

export default Footer;