import type { Metadata } from "next";
import { CaseStudyPage } from "../../components";
import { caseStudies } from "../../lib/content";

export const metadata: Metadata = {
  title: "Designing an AI assistant procurement buyers will actually use",
  description: "How Abi moved from a peripheral tool to the entry point of the platform—and what that cost.",
};

export default function BeroeAbiPage() {
  return <CaseStudyPage study={caseStudies["beroe-abi"]} />;
}
