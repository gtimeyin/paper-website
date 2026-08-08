import type { Metadata } from "next";
import { ArrowLink, TrustInstrument } from "../components";
import { patterns } from "../lib/content";

export const metadata: Metadata = {
  title: "Meridian · Lab — Eight agentic UX patterns",
  description: "Interface patterns for systems that reason and act, with the failure modes that matter.",
};

export default function MeridianPage() {
  return (
    <main id="main" className="meridian-page">
      <section className="meridian-hero page-shell">
        <div className="hero-topline"><span>Instrument 01</span><span>Working model · v0.8</span></div>
        <h1>Meridian<span>·</span>Lab</h1>
        <div className="meridian-intro">
          <p>Eight interface patterns for systems that reason, recommend, and act.</p>
          <p className="small-copy">Built from recurring decisions in enterprise AI products—not from an idealised chat demo.</p>
        </div>
        <div className="meridian-stage-line" aria-hidden="true">
          <span>ANNOTATE</span><i /><span>ANSWER</span><i /><span>ACT</span><i /><span>AUDIT</span>
        </div>
      </section>

      <section className="model-origin page-shell">
        <div className="case-index">01 / Origin</div>
        <div>
          <h2>The model fell out of shipping.</h2>
          <p className="lead-copy">Two years of designing procurement interfaces kept producing the same questions: what is happening, why, what has it changed, and what can I safely do next? Meridian names the interaction contracts hidden inside that ladder.</p>
        </div>
      </section>

      <section className="lab-demo page-shell">
        <div className="case-index">02 / Instrument</div>
        <TrustInstrument variant="dark" />
        <div className="demo-notes">
          <div><span>01</span><b>Recommendation is bounded</b><p>The interface names the condition that prevents automatic approval.</p></div>
          <div><span>02</span><b>Confidence is decomposed</b><p>One number never hides which evidence is incomplete.</p></div>
          <div><span>03</span><b>Action follows inspection</b><p>The next step prepares authority; it does not silently assume it.</p></div>
        </div>
      </section>

      <section className="pattern-section page-shell" id="patterns">
        <div className="case-index">03 / Pattern index</div>
        <div className="pattern-heading"><h2>Eight contracts at the interface layer.</h2><p>Each pattern is useful only when paired with the failure it is designed to prevent.</p></div>
        <div className="pattern-grid">
          {patterns.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="pattern-state"><i /> contract</div>
            </article>
          ))}
        </div>
      </section>

      <section className="failure-section page-shell">
        <div className="case-index">04 / Failure test</div>
        <div className="failure-copy">
          <h2>If the system is wrong, what happens next?</h2>
          <p>A trustworthy interface is not one that never fails. It is one that makes failure visible early, limits its radius, and leaves enough evidence for a person to recover.</p>
          <ArrowLink href="/work/beroe-abi">See the production case</ArrowLink>
        </div>
        <div className="failure-matrix" aria-label="Failure mode matrix">
          <div><span>Failure</span><span>Containment</span></div>
          <div><b>Weak source</b><p>provenance at claim</p></div>
          <div><b>Unclear scope</b><p>visible boundaries</p></div>
          <div><b>Wrong action</b><p>preview + reversal</p></div>
          <div><b>Lost context</b><p>decision receipt</p></div>
        </div>
      </section>
    </main>
  );
}
