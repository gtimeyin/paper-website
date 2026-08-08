import type { Metadata } from "next";
import { ArrowLink } from "../components";

export const metadata: Metadata = {
  title: "About",
  description: "Timeyin Gordon is a design engineer working at the intersection of AI systems, product design, and production code.",
};

export default function AboutPage() {
  return (
    <main id="main" className="about-page page-shell">
      <section className="about-hero">
        <div className="eyebrow">About / Timeyin Gordon</div>
        <h1>I work where model capability meets human consequence.</h1>
        <div className="about-intro">
          <p>I’m a design engineer who turns complex AI and data systems into products people can inspect, understand, and safely act through.</p>
          <div className="about-mark" aria-hidden="true"><span>T</span><i>G</i></div>
        </div>
      </section>

      <section className="about-story">
        <div className="case-index">01 / Throughline</div>
        <div>
          <p className="lead-copy">My path runs through computer science, motion, product design, systems, and code. The disciplines changed; the question did not: how do you make a difficult system feel legible without pretending it is simple?</p>
          <p>As a founder at Neuro Six, I learned to carry an idea through thesis, system, product, and delivery. In enterprise procurement, I applied the same full-pipeline instinct to AI assistants, decision systems, visualisation infrastructure, and production components.</p>
          <p>The combination is the point. I can work on the interaction contract, build the system beneath it, and stay close enough to production to see where the argument breaks.</p>
        </div>
      </section>

      <section className="about-principles">
        <div className="case-index">02 / Operating principles</div>
        <div className="principles-grid">
          <article><span>01</span><h2>Show the work.</h2><p>Trust grows when sources, boundaries, and trade-offs stay visible.</p></article>
          <article><span>02</span><h2>Build the substrate.</h2><p>One strong interface is useful. A system that lets a team keep making them is leverage.</p></article>
          <article><span>03</span><h2>Stay near production.</h2><p>The distance between intent and shipped behaviour is where quality disappears.</p></article>
        </div>
      </section>

      <section className="about-contact">
        <span>Currently interested in</span>
        <h2>Agentic products with real decisions, real consequences, and a team willing to make both legible.</h2>
        <ArrowLink href="mailto:gtimeyin@gmail.com">gtimeyin@gmail.com</ArrowLink>
      </section>
    </main>
  );
}
