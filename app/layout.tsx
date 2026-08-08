import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "gtimeyin.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Timeyin Gordon — Design Engineer",
      template: "%s — Timeyin Gordon",
    },
    description: "I design and build the interface layer that makes AI systems trustworthy enough to act on.",
    openGraph: {
      type: "website",
      siteName: "Timeyin Gordon",
      title: "Timeyin Gordon — Design Engineer",
      description: "The interface layer between what a model can do and what a person will let it do.",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Timeyin Gordon — Making AI trustworthy enough to act" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Timeyin Gordon — Design Engineer",
      description: "The interface layer between what a model can do and what a person will let it do.",
      images: [`${origin}/og.png`],
    },
  };
}

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Timeyin Gordon, home">
        TG<span className="wordmark-dot">•</span>
      </Link>
      <nav className="header-actions" aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <a className="button button-dark" href="mailto:gtimeyin@gmail.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-kicker">Have a difficult system?</div>
      <a className="footer-email" href="mailto:gtimeyin@gmail.com">
        Let’s make it legible. <span aria-hidden="true">↗</span>
      </a>
      <div className="footer-row">
        <div>Timeyin Gordon · Design Engineer</div>
        <div className="footer-links">
          <a href="https://x.com/gtimeyin" target="_blank" rel="noreferrer">X</a>
          <a href="https://substack.com/@gtimeyin" target="_blank" rel="noreferrer">Substack</a>
          <a href="https://www.behance.net/gtimeyin" target="_blank" rel="noreferrer">Behance</a>
          <a href="https://dribbble.com/gtimeyin" target="_blank" rel="noreferrer">Dribbble</a>
        </div>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
