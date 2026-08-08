import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected work",
  description: "Agentic UX and decision-system case studies by design engineer Timeyin Gordon.",
};

export default function WorkPage() {
  return (
    <main id="main" className="index-page page-shell">
      <section className="index-hero">
        <div className="eyebrow">Selected work / 2024–25</div>
        <h1>Judgment under constraint.</h1>
        <p>Two production cases. The decisions that mattered, the options rejected, and the evidence that survived.</p>
      </section>
      <section className="work-index-list">
        <Link href="/work/beroe-abi" className="work-index-item blue-item">
          <span className="big-number">01</span>
          <div><span>Agentic UX · Beroe</span><h2>Designing an AI assistant procurement buyers would actually use</h2><p>Entry point · Search · Design engineering</p></div>
          <span className="index-arrow">↗</span>
        </Link>
        <Link href="/work/watch" className="work-index-item orange-item">
          <span className="big-number">02</span>
          <div><span>Decision systems · Beroe</span><h2>What a buyer needs before they act on a risk alert</h2><p>Risk intelligence · Data visualisation · 45+ chart types</p></div>
          <span className="index-arrow">↗</span>
        </Link>
        <Link href="/work/archive" className="archive-link"><span>Archive</span><span>Earlier work in commerce, motion, and independent products ↗</span></Link>
      </section>
    </main>
  );
}
