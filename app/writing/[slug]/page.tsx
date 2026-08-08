import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "../../lib/content";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  return note ? { title: note.title, description: note.summary } : {};
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();
  const currentIndex = notes.findIndex((item) => item.slug === slug);
  const next = notes[(currentIndex + 1) % notes.length];

  return (
    <main id="main" className="note-page page-shell">
      <article>
        <header className="note-header">
          <div className="eyebrow">{note.type} · {note.date}</div>
          <h1>{note.title}</h1>
          <p>{note.summary}</p>
        </header>
        <div className="note-body">
          {note.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <aside><span>Working note</span><p>This is an evolving observation from production work, not a universal law. The useful question is where it fails.</p></aside>
        </div>
      </article>
      <nav className="note-next" aria-label="Continue reading"><span>Next note</span><Link href={`/writing/${next.slug}`}>{next.title} ↗</Link></nav>
    </main>
  );
}
