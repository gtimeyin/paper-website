import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work archive",
  description: "Earlier work by Timeyin Gordon across commerce, motion, and independent products.",
};

const archive = [
  { id: "dustin", year: "2024", category: "Commerce research", title: "Finding the trust failures inside a 68.8% abandoned checkout", description: "An applied research project for Dustin Home across journey mapping, usability interviews, competitive evidence, and a three-part improvement strategy.", monogram: "D/H" },
  { id: "tangerine", year: "2023", category: "Motion & fintech", title: "Making an all-in-one financial experience easier to enter", description: "Interaction and motion work exploring how three-dimensional cues can carry meaning—not merely decoration—in a financial product.", monogram: "T/G" },
  { id: "village-people", year: "2025", category: "Independent product", title: "Your Village People", description: "A card game rooted in African folklore, strategy, typography, and unpredictable social play.", monogram: "YVP" },
];

export default function ArchivePage() {
  return (
    <main id="main" className="archive-page page-shell">
      <section className="index-hero">
        <div className="eyebrow">Archive / Earlier work</div>
        <h1>Range, kept in context.</h1>
        <p>Real work that shaped the operator I am now—without asking it to prove today’s positioning.</p>
      </section>
      <section className="archive-list">
        {archive.map((item, index) => (
          <article id={item.id} key={item.id} className="archive-item">
            <div className="archive-monogram"><span>{item.monogram}</span><i>0{index + 1}</i></div>
            <div className="archive-copy"><span>{item.year} · {item.category}</span><h2>{item.title}</h2><p>{item.description}</p></div>
          </article>
        ))}
      </section>
    </main>
  );
}
