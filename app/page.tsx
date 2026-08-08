import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink, SectionHeading, TrustInstrument } from "./components";
import { notes } from "./lib/content";

export const metadata: Metadata = {
  title: { absolute: "Timeyin Gordon — Design Engineer" },
  description: "I design and build the interface layer that makes AI systems trustworthy enough to act on.",
};

export default function Home() {
  return (
    <main id="main">
      <section className="home-hero page-shell">
        <div className="hero-topline">
          <span>Design engineer / 2026</span>
          <span>AI systems × human judgment</span>
        </div>
        <h1>
          Making AI<br />
          <span className="hero-trust">trustworthy</span><br />
          enough to <span className="hero-act">act.</span>
        </h1>
        <div className="hero-bottom">
          <p>I design and build the interface layer between what a model <em>can</em> do and what a person will actually let it do.</p>
          <div className="confidence-key" aria-label="Confidence color key">
            <div><i className="key-blue" /><span>Evidence</span></div>
            <div><i className="key-orange" /><span>Judgment</span></div>
            <div><i className="key-lime" /><span>Authority</span></div>
          </div>
        </div>
        <div className="hero-annotation annotation-a"><span>01</span> capability<br />is not permission</div>
        <div className="hero-annotation annotation-b"><span>02</span> interface carries<br />the burden of proof</div>
      </section>

      <section className="thesis-section page-shell">
        <SectionHeading index="01" label="Thesis" />
        <div className="thesis-grid">
          <p className="thesis-statement">A working model is only the beginning. People act when the system makes its sources, confidence, boundaries, and consequences legible.</p>
          <div className="thesis-note">
            <span className="note-label">Working premise</span>
            <p>The interface is not a wrapper around intelligence. It is the permission layer.</p>
            <ArrowLink href="/writing/interface-is-permission-layer">Read the field note</ArrowLink>
          </div>
        </div>
      </section>

      <section className="instruments-section page-shell">
        <SectionHeading index="02" label="Instruments" title="Frameworks you can inspect, not slogans you have to trust." />
        <div className="instrument-feature">
          <div className="instrument-copy">
            <span className="card-number">01 / Flagship</span>
            <h3>Meridian · Lab</h3>
            <p>Eight patterns for systems that reason and act—each paired with the failure mode it is meant to contain.</p>
            <ArrowLink href="/meridian">Open the pattern index</ArrowLink>
          </div>
          <TrustInstrument />
        </div>
        <div className="instrument-grid">
          <article>
            <span className="card-number">02 / System</span>
            <h3>Pattern index</h3>
            <p>A working vocabulary for provenance, confidence, scope, memory, reversibility, and receipts.</p>
            <ArrowLink href="/meridian#patterns">Browse eight patterns</ArrowLink>
          </article>
          <article>
            <span className="card-number">03 / Method</span>
            <h3>OOXD</h3>
            <p>Outcome-oriented experience design: start with the decision a person must defend, then design backward.</p>
            <ArrowLink href="/writing/assistant-at-point-of-uncertainty">See it in practice</ArrowLink>
          </article>
        </div>
      </section>

      <section className="selected-work page-shell">
        <SectionHeading index="03" label="Selected work" title="Production evidence." />
        <Link href="/work/beroe-abi" className="work-card work-card-blue">
          <div className="work-card-meta"><span>Beroe · Agentic UX</span><span>2024–25</span></div>
          <div className="work-card-title"><h3>Designing an AI assistant procurement buyers would actually use</h3><span aria-hidden="true">↗</span></div>
          <p>How Abi moved from a peripheral feature to the platform entry point.</p>
          <div className="work-visual search-visual" aria-hidden="true">
            <div className="search-shell"><span className="search-mark">ABI</span><b>What do you need to decide today?</b><span className="search-arrow">→</span></div>
            <div className="prompt-row"><span>Continue a review</span><span>Check market movement</span><span>Find a supplier</span></div>
          </div>
        </Link>
        <Link href="/work/watch" className="work-card work-card-orange">
          <div className="work-card-meta"><span>Beroe · Decision systems</span><span>2024–25</span></div>
          <div className="work-card-title"><h3>What a buyer needs before they act on a risk alert</h3><span aria-hidden="true">↗</span></div>
          <p>A decision ladder and the 45+ chart visualisation system it required.</p>
          <div className="work-visual chart-visual" aria-hidden="true">
            <div className="chart-y"><span>Risk</span><span>Stable</span></div>
            <div className="chart-lines"><i /><i /><i /><i /><i /></div>
            <div className="chart-alert"><b>Supply continuity</b><span>Evidence incomplete</span></div>
          </div>
        </Link>
      </section>

      <section className="field-notes page-shell">
        <SectionHeading index="04" label="Field notes" title="Observations from the interface layer." />
        <div className="notes-list">
          {notes.map((note, index) => (
            <Link href={`/writing/${note.slug}`} className="note-row" key={note.slug}>
              <span className="note-index">0{index + 1}</span>
              <span className="note-date">{note.date}</span>
              <span><strong>{note.title}</strong><em>{note.type}</em></span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <ArrowLink href="/writing" className="all-notes-link">All field notes</ArrowLink>
      </section>
    </main>
  );
}
