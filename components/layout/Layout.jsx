import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">categories</Link>
        </div>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/Amirmmolazemi"
          target="_blank"
          rel="noreferrer"
        >
          Amirmmolazemi{" "}
        </a>
        Next.js | food ordering Project &copy;
      </footer>
    </>
  );
}

export default Layout;
