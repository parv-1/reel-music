import styles from "./page.module.scss";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import FeatureTiles from "../components/FeatureTiles/FeatureTiles";
import Footer from "../components/Footer/Footer";

export default function Landing() {
  return (
    <>
      <NavBar />
      <section className="container" style={{ padding: "80px 0 40px" }}>
        <div className={`riso-surface halftone ${styles.surface}`}>
          <div style={{ maxWidth: 900 }}>
            <div className="badge">Strictly NO AI content</div>
            <h1 className={styles.title}>ReelMusic — a home for human sound.</h1>
            <p className={styles.lede}>
              Stream music from real artists. Artists keep what they earn. A 1960s risograph texture with a modern, award-grade UI.
            </p>
            <div className={styles.actions}>
              <a href="/pricing" className="btn btn--primary">Start listening</a>
              <a href="/upload" className="btn">I’m an artist</a>
            </div>
          </div>
        </div>
      </section>
      <section className={`container ${styles.section}`}>
        <div className={styles.grid}>
          {[
            { icon: "🎧", title: "Real audio", desc: "No AI bands, no synthetic vocals. Every upload is certified by the artist." },
            { icon: "💰", title: "Artists paid", desc: "Transparent subscriptions and payouts. Keep what you earn." },
            { icon: "🛡️", title: "Secure streaming", desc: "Signed URLs, encrypted transport, and active moderation." }
          ].map(({ icon, title, desc }) => (
            <div className={`card halftone ${styles.tile}`} key={title}>
              <div className={styles.tileHead}>
                <span>{icon}</span><strong>{title}</strong>
              </div>
              <div className={styles.tileDesc}>{desc}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
