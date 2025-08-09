import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div>© {new Date().getFullYear()} ReelMusic</div>
        <nav className={styles.links}>
          <a href="/legal/terms">Terms</a>
          <a href="/legal/content-policy">Content Policy</a>
        </nav>
      </div>
    </footer>
  );
}
