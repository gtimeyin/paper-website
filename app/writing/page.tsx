import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "../lib/content";

export const metadata: Metadata = {
  title: "Field notes",
  description: "Notes on agentic UX, design systems, trust, and the interface layer by Timeyin Gordon.",
};

export default function WritingPage() {
  return (
    <main id="main" className="writing-index page-shell">
      <section className="index-hero">
        <div className="eyebrow">Field notes / Working in public</div>
        <h1>Observations from the interface layer.</h1>
        <p>Short notes on the recurring decisions inside AI products: proof, scope, memory, authority, and recovery.</p>
      </section>
      <section className="writing-grid">
        {notes.map((note, index) => (
          <Link href={`/writing/${note.slug}`} key={note.slug} className="writing-card">
            <div className="writing-card-top"><span>0{index + 1}</span><span>{note.date}</span></div>
            <div><span className="note-type">{note.type}</span><h2>{note.title}</h2><p>{note.summary}</p></div>
            <span className="read-label">Read note ↗</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
