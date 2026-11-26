import {
  ArrowUpRight, BadgeDollarSign, Blocks, ChartNoAxesCombined, CircleHelp, GitBranch,
  MessageCircle, Network, Play, ShieldCheck, Sparkles,
} from 'lucide-react';

const symbols = {
  chat: MessageCircle,
  integrations: Network,
  features: Sparkles,
  demo: Play,
  industries: Blocks,
  process: GitBranch,
  benefits: ChartNoAxesCombined,
  pricing: BadgeDollarSign,
  security: ShieldCheck,
  faq: CircleHelp,
  contact: ArrowUpRight,
};

export default function SectionArtwork({ kind }: { kind: keyof typeof symbols }) {
  const Symbol = symbols[kind];
  return (
    <div className="section-art" data-kind={kind} aria-hidden="true">
      <span className="section-art-shape" />
      <span className="section-art-trace" />
      <span className="section-art-icon"><Symbol strokeWidth={1.3} /></span>
    </div>
  );
}
