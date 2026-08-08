import Link from "next/link";
import type { CaseStudy } from "./lib/content";

export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`arrow-link ${className}`}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </Link>
  );
}

export function SectionHeading({ index, label, title }: { index: string; label: string; title?: string }) {
  return (
    <div className="section-heading">
      <span>{index}</span>
      <span>{label}</span>
      {title && <h2>{title}</h2>}
    </div>
  );
}

export function TrustInstrument({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className={`trust-instrument ${variant}`} aria-label="Conceptual interface showing an agent recommendation with evidence and approval controls">
      <div className="instrument-bar">
        <span className="instrument-name">MERIDIAN / 04</span>
        <span className="status-pill"><i /> READY FOR REVIEW</span>
      </div>
      <div className="instrument-body">
        <div className="instrument-query">Should we advance this supplier review?</div>
        <div className="recommendation">
          <span className="confidence-number">82%</span>
          <div>
            <strong>Advance with one condition</strong>
            <p>Price exposure is acceptable. Request the missing continuity evidence before approval.</p>
          </div>
        </div>
        <div className="evidence-rail">
          <div><span>01</span><b>Market movement</b><em>verified</em></div>
          <div><span>02</span><b>Supplier continuity</b><em className="warn">incomplete</em></div>
          <div><span>03</span><b>Contract exposure</b><em>verified</em></div>
        </div>
        <div className="instrument-actions">
          <button type="button">Inspect reasoning</button>
          <button type="button" className="primary-action">Prepare approval</button>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main id="main" className={`case-page accent-${study.accent}`}>
      <section className="case-hero page-shell">
        <div className="eyebrow">{study.eyebrow}</div>
        <h1>{study.title}</h1>
        <p className="case-lede">{study.lede}</p>
        <div className="case-meta">
          <div><span>Company</span><strong>{study.company}</strong></div>
          <div><span>Role</span><strong>{study.role}</strong></div>
          <div><span>Scope</span><strong>{study.scope}</strong></div>
          <div><span>Team</span><strong>{study.team}</strong></div>
          <div><span>Year</span><strong>{study.year}</strong></div>
        </div>
      </section>

      <section className="case-opening page-shell">
        <div className="case-index">01 / The problem</div>
        <div className="case-opening-copy">
          <p className="lead-copy">{study.problem}</p>
          <div className="constraint-grid">
            {study.constraints.map((constraint, index) => (
              <div key={constraint}><span>0{index + 1}</span><p>{constraint}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="decision-section page-shell">
        <div className="case-index">02 / Decisions</div>
        <div className="decision-intro">
          <h2>The forks that<br />shaped the work.</h2>
          <p>Not a process diary. The decisions, their constraints, and the roads left untaken.</p>
        </div>
        <div className="decision-list">
          {study.decisions.map((decision) => (
            <article className="decision-card" key={decision.number}>
              <div className="decision-number">{decision.number}</div>
              <div>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
                <div className="rejected"><span>Rejected</span>{decision.rejected}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section page-shell">
        <div className="case-index">03 / Evidence</div>
        <div>
          <h2>What survived contact<br />with production.</h2>
          <div className="evidence-list">
            {study.evidence.map((item, index) => (
              <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="change-section page-shell">
        <div className="case-index">04 / What I’d change</div>
        <blockquote>{study.change}</blockquote>
      </section>

      <section className="next-project page-shell">
        <span>Continue reading</span>
        <ArrowLink href={study.nextHref}>{study.nextLabel}</ArrowLink>
      </section>
    </main>
  );
}
