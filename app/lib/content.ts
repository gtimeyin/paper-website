export type Decision = {
  number: string;
  title: string;
  body: string;
  rejected: string;
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  company: string;
  role: string;
  scope: string;
  team: string;
  year: string;
  problem: string;
  constraints: string[];
  decisions: Decision[];
  evidence: string[];
  change: string;
  nextHref: string;
  nextLabel: string;
  accent: "blue" | "orange";
};

export const caseStudies: Record<string, CaseStudy> = {
  "beroe-abi": {
    slug: "beroe-abi",
    eyebrow: "Agentic UX · Entry point",
    title: "Designing an AI assistant procurement buyers would actually use",
    lede: "How Abi went from a peripheral feature to the entry point of the platform — and what the pivot cost.",
    company: "Beroe",
    role: "Lead Product Design Engineer",
    scope: "Strategy · Product design · Design engineering",
    team: "Product · Engineering · Research",
    year: "2024–25",
    problem: "Beroe’s platform held deep procurement intelligence. Its homepage did not reflect it: dense for new users, repetitive for returning ones. Abi existed and was largely ignored. The failure was not capability. It was that nobody had a reason to trust the assistant enough to start there.",
    constraints: [
      "Users are domain experts with more category knowledge than the system.",
      "Roughly 5,000 alerts per user, depending on portfolio size.",
      "A multi-module platform with entrenched navigation habits.",
    ],
    decisions: [
      {
        number: "01",
        title: "A concierge, not another dashboard",
        body: "I framed the homepage around four intentions: start something, continue work, understand today, and discover what matters. The structure organised the system around buyer intent instead of module ownership.",
        rejected: "More module density with better visual hierarchy. It preserved the problem and made it prettier.",
      },
      {
        number: "02",
        title: "Triage belongs outside the working surface",
        body: "I moved notifications into a consolidated drawer, grouped similar alerts, and separated system messages from market signals. The homepage could then carry decisions rather than administration.",
        rejected: "Inline notification surfacing. At this alert volume, the homepage becomes unusable.",
      },
      {
        number: "03",
        title: "Search became the homepage",
        body: "Testing showed buyers wanted one entry point. Search stopped being a utility and became the surface, with Abi embedded in results. The four questions survived as behaviours rather than visible modules.",
        rejected: "A modular homepage with promoted search. Two entry points would leave both compromised.",
      },
      {
        number: "04",
        title: "Contextual invitations over tutorials",
        body: "Quick Action Cards offered illustrated prompts tied to role and recent activity. They taught Abi’s range in context, at the moment it could help.",
        rejected: "A guided onboarding flow: expensive to build and easy for expert users to skip.",
      },
      {
        number: "05",
        title: "The prototype became the production path",
        body: "I carried the system through Figma, Framer, Subframe, and into React/Tailwind components. Interaction intent stayed visible because the work did not dissolve into handoff annotations.",
        rejected: "A conventional design-to-development handoff, where fidelity loss had become a recurring cost.",
      },
    ],
    evidence: [
      "Shipped as the platform’s primary working surface for enterprise procurement buyers.",
      "The design system moved from Figma into production code through a component pipeline.",
      "Interaction patterns from the work became the foundation of the Meridian working model.",
    ],
    change: "The pivot to search-as-homepage was right, and I under-costed it. Modules built against the first structure were orphaned; stakeholders who had approved the concierge framing had to be re-convinced by what looked like a reversal. I would run that pivot as an explicit second phase with its own case, rather than fold it quietly into the first.",
    nextHref: "/work/watch",
    nextLabel: "What a buyer needs before acting on risk",
    accent: "blue",
  },
  watch: {
    slug: "watch",
    eyebrow: "Decision systems · Risk intelligence",
    title: "What a buyer needs before they act on a risk alert",
    lede: "Restructuring supplier and category monitoring around a decision ladder — and building the visualisation system it required.",
    company: "Beroe",
    role: "Lead Product Design Engineer",
    scope: "Information architecture · Data visualisation · Engineering",
    team: "Product · Engineering · Domain experts",
    year: "2024–25",
    problem: "Watch pages were mission-critical and structurally hostile: fragmented across tabs and filters, dense with data that obscured the signal, and offering no recommended action. Abi was present and underused. Buyers were handed risk data, left to interpret it alone, then asked to defend a decision the interface had not helped them reach.",
    constraints: [
      "High-stakes, externally facing, and audited decisions.",
      "Domain experts expect the system to show its work.",
      "Continuous monitoring means every false alarm spends trust.",
    ],
    decisions: [
      {
        number: "01",
        title: "A decision ladder, not a data taxonomy",
        body: "I organised the experience around four questions: what is happening, why, what it has done, and what I can do. The sequence follows the buyer’s burden of proof instead of the database structure.",
        rejected: "Better filters and tabs. The navigation was a symptom; the ordering was the disease.",
      },
      {
        number: "02",
        title: "Build the visualisation grammar",
        body: "I built @max/dataviz on Visx: more than 45 chart types with interaction-driven emphasis. The series under discussion holds full visual weight while the rest recede.",
        rejected: "An off-the-shelf chart library with theming. The required behaviour lived in the interaction model, not the styling layer.",
      },
      {
        number: "03",
        title: "Put Abi at the point of uncertainty",
        body: "The assistant moved to moments where the user hesitates and could offer a specific next action. It became part of the reasoning path rather than a global surface waiting to be summoned.",
        rejected: "A persistent global assistant. Presence is not adoption.",
      },
      {
        number: "04",
        title: "Progressive disclosure over completeness",
        body: "At-a-glance status, contextual drawers, and modular blocks preserved the decision thread while allowing expert depth on demand.",
        rejected: "Full-detail default views. Showing everything is indistinguishable from showing nothing.",
      },
    ],
    evidence: [
      "Shipped as the risk-monitoring surface for enterprise procurement buyers.",
      "A visualisation library covering 45+ chart types became the product default.",
      "The four-question ladder became the front half of the Meridian working model.",
    ],
    change: "I designed the recommendation layer to be requested; it should have been volunteered. An unfamiliar system builds trust by showing its reasoning before anyone asks and earning quiet later. We inverted that sequence and spent months of adoption effort re-earning ground the default had cost.",
    nextHref: "/meridian",
    nextLabel: "Explore the Meridian pattern index",
    accent: "orange",
  },
};

export const notes = [
  {
    slug: "interface-is-permission-layer",
    date: "07.2026",
    type: "Thesis",
    title: "The interface is the permission layer",
    summary: "A capable model is not yet a usable agent. The interface carries the proof, boundaries, and reversibility that turn capability into permission.",
    body: [
      "When an AI system can act, the interface stops being a presentation layer. It becomes the place where capability is converted into permission.",
      "That conversion needs more than a confirmation dialog. A person needs to understand what the system believes, where the belief came from, what it proposes to change, and how much of that change can be undone. The interface is where those questions become inspectable.",
      "This changes the designer’s unit of work. We are not arranging outputs; we are designing the contract between a probabilistic system and a person carrying the consequences.",
    ],
  },
  {
    slug: "assistant-at-point-of-uncertainty",
    date: "06.2026",
    type: "Pattern",
    title: "Put the assistant at the point of uncertainty",
    summary: "A universal chat box advertises capability. A situated intervention earns use by appearing where a decision becomes difficult.",
    body: [
      "A persistent assistant can be visible everywhere and useful nowhere. The burden remains on the user to recognise a question, leave their task, formulate it, and judge the answer without the context the interface already holds.",
      "Situated assistance reverses that burden. It arrives at a decision boundary with the relevant entities, constraints, and recent actions already in view. The prompt is not ‘ask me anything’; it is a specific offer to reduce uncertainty.",
      "The design test is simple: if removing the assistant changes nothing about the decision path, it was decoration. If its presence changes what the user can safely decide, it is part of the product.",
    ],
  },
  {
    slug: "design-systems-for-agents",
    date: "05.2026",
    type: "Systems",
    title: "Design systems now have two kinds of users",
    summary: "A system documented only for human recall leaves agents guessing. Tokens, constraints, and component intent need to be machine-legible too.",
    body: [
      "Design systems have always encoded more than appearance. They carry decisions about hierarchy, behaviour, accessibility, and the boundaries of acceptable variation.",
      "When agents participate in production, that tacit layer becomes a bottleneck. Screenshots and prose are not enough. The system needs explicit tokens, constrained props, meaningful component names, examples of valid composition, and tests that reveal when the contract has been broken.",
      "The goal is not to let an agent design unsupervised. It is to make the system’s reasoning legible enough that both people and tools can produce within it—and make errors easy to detect.",
    ],
  },
  {
    slug: "progressive-disclosure-is-trust",
    date: "04.2026",
    type: "Field note",
    title: "Progressive disclosure is a trust decision",
    summary: "In high-stakes tools, hiding detail and sequencing detail are different acts. One spends trust; the other helps a person build it.",
    body: [
      "Progressive disclosure is often treated as visual housekeeping: put the secondary content in a drawer and make the first view quieter.",
      "In a decision system, the sequence is more consequential. The summary makes a claim. The next layer must expose the evidence for that claim. The final layer should reveal source, calculation, and exception detail without breaking the thread that led there.",
      "A quiet interface is not automatically trustworthy. Trust comes from knowing that depth exists, seeing when it matters, and being able to reach it without losing the question you were trying to answer.",
    ],
  },
];

export const patterns = [
  ["01", "Source before summary", "Attach provenance where the claim appears, not in a distant audit view."],
  ["02", "Confidence with consequence", "Express uncertainty in the language of the decision it affects."],
  ["03", "Scope is visible", "Show what the agent can see, change, and remember before it acts."],
  ["04", "Preview the delta", "Make proposed change inspectable against the current state."],
  ["05", "Reversible by default", "Prefer actions that can be undone, amended, or staged."],
  ["06", "Escalate with context", "Hand uncertainty to a person without making them reconstruct the case."],
  ["07", "Memory is inspectable", "Let people see, correct, and remove what the system carries forward."],
  ["08", "Receipts after action", "Keep a legible record of what changed, why, and under whose authority."],
];
