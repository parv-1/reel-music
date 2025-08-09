"use client";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { Music, User } from "lucide-react";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className="container row" style={{ justifyContent: "space-between", padding: "16px 0" }}>
        <Link href="/" className={styles.brand}>
          <Music size={22} /> ReelMusic
        </Link>
        <nav className={styles.links}>
          <Link href="/dashboard" className="badge">Dashboard</Link>
          <Link href="/login" className="btn btn--ghost"><User size={18}/> Sign in</Link>
        </nav>
      </div>
    </header>
  );
}
