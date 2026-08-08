import type { Metadata } from "next";
import { CaseStudyPage } from "../../components";
import { caseStudies } from "../../lib/content";

export const metadata: Metadata = {
  title: "What a buyer needs before acting on a risk alert",
  description: "A decision ladder for supplier risk—and the visualisation system it required.",
};

export default function WatchPage() {
  return <CaseStudyPage study={caseStudies.watch} />;
}
