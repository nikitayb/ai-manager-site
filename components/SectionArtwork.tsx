import {
  ArrowUpRight, BadgeDollarSign, Blocks, Bot, CalendarCheck, ChartNoAxesCombined,
  Check, CircleHelp, Clock4, GitBranch, Inbox, LockKeyhole, Mail, MessageCircle,
  MessagesSquare, Monitor, Network, Play, Plug, Send, ShieldCheck, Sparkles, Wallet,
} from 'lucide-react';

const illustrations = {
  chat: { center: MessageCircle, orbit: [Bot, MessagesSquare] },
  integrations: { center: Network, orbit: [Send, MessageCircle, Monitor] },
  features: { center: Sparkles, orbit: [Bot, CalendarCheck, Inbox] },
  demo: { center: Play, orbit: [MessagesSquare, Check] },
  industries: { center: Blocks, orbit: [CalendarCheck, Monitor] },
  process: { center: GitBranch, orbit: [Plug, CalendarCheck, Check] },
  benefits: { center: ChartNoAxesCombined, orbit: [Clock4, Check] },
  pricing: { center: BadgeDollarSign, orbit: [Wallet, Check] },
  security: { center: ShieldCheck, orbit: [LockKeyhole, Check] },
  faq: { center: CircleHelp, orbit: [MessageCircle, MessagesSquare] },
  contact: { center: ArrowUpRight, orbit: [Mail, Send] },
};

export default function SectionArtwork({ kind }: { kind: keyof typeof illustrations }) {
  const { center: Symbol, orbit } = illustrations[kind];
  return (
    <div className="section-art" data-kind={kind} aria-hidden="true">
      <span className="section-art-shape" />
      <span className="section-art-trace" />
      <span className="section-art-icon"><Symbol strokeWidth={1.35} /></span>
      {orbit.map((Satellite, index) => (
        <span className="section-art-satellite" data-position={index + 1} key={index}>
          <Satellite strokeWidth={1.45} />
        </span>
      ))}
    </div>
  );
}
