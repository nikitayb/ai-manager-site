import {
  Bell,
  Bot,
  Brain,
  Building2,
  Car,
  CalendarClock,
  Clock,
  CreditCard,
  Dumbbell,
  Globe,
  HelpCircle,
  Info,
  KeyRound,
  Lightbulb,
  Lock,
  MessageCircle,
  MessagesSquare,
  MessageSquare,
  Plug,
  Rocket,
  Scissors,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Tag,
  User,
  UserPlus,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react';

// Декоративные элементы по бокам секций. Только на широких экранах (от 1024px).
// Скрыты от экранных читалок и не перехватывают клики.
// Каждый вариант относится к теме своей секции.
export type Variant =
  | 'cube'
  | 'rings'
  | 'wave'
  | 'channels'
  | 'industries'
  | 'flow'
  | 'clock'
  | 'chat'
  | 'price'
  | 'shield'
  | 'help'
  | 'launch';

type Props = {
  left?: Variant;
  right?: Variant;
};

export default function Decor({ left, right }: Props) {
  return (
    <>
      {left && <Side variant={left} side="left" />}
      {right && <Side variant={right} side="right" />}
    </>
  );
}

function Side({ variant, side }: { variant: Variant; side: 'left' | 'right' }) {
  const position = side === 'left' ? 'left-8 xl:left-16' : 'right-8 xl:right-16';
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 lg:block ${position}`}
    >
      {variant === 'cube' && <Cube />}
      {variant === 'rings' && <Rings />}
      {variant === 'wave' && <Wave />}
      {variant === 'channels' && <Channels />}
      {variant === 'industries' && <Industries />}
      {variant === 'flow' && <Flow />}
      {variant === 'clock' && <Clock3D />}
      {variant === 'chat' && <ChatStack />}
      {variant === 'price' && <PriceCard />}
      {variant === 'shield' && <Shield />}
      {variant === 'help' && <HelpStack />}
      {variant === 'launch' && <Launch />}
    </div>
  );
}

// 3D-модель из CSS: куб с шестью гранями, медленно вращается
function Cube() {
  const faces = [
    'translateZ(88px)',
    'rotateY(180deg) translateZ(88px)',
    'rotateY(90deg) translateZ(88px)',
    'rotateY(-90deg) translateZ(88px)',
    'rotateX(90deg) translateZ(88px)',
    'rotateX(-90deg) translateZ(88px)',
  ];
  return (
    <div className="relative h-44 w-44" style={{ perspective: '600px' }}>
      <div className="cube-3d absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        {faces.map((t, i) => (
          <div
            key={t}
            className="absolute inset-0 border border-white/25 bg-white/[0.05]"
            style={{ transform: t, boxShadow: i === 0 ? 'inset 0 0 40px rgba(255,255,255,0.08)' : undefined }}
          />
        ))}
      </div>
    </div>
  );
}

// Концентрические орбиты с движущейся точкой
function Rings() {
  return (
    <div className="relative h-56 w-56">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-6 rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-12 rounded-full border border-white/20" />
      <div className="orbit absolute inset-0">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
    </div>
  );
}

// Линии пульса разной яркости
function Wave() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
      {[40, 80, 120, 160].map((y, i) => (
        <path
          key={y}
          d={`M0 ${y} h40 l8 -${14 - i * 2} l10 ${28 - i * 4} l10 -${20 - i * 2} l8 ${14 - i * 2} h124`}
          stroke="#f2f2f2"
          strokeOpacity={0.55 - i * 0.12}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

// Плашка с иконкой, общая для всех вариантов
function Tile({ Icon, size = 12, className = '', delay }: { Icon: LucideIcon; size?: number; className?: string; delay?: string }) {
  return (
    <div
      className={`float tile flex items-center justify-center rounded-xl ${className}`}
      style={{ width: size * 4, height: size * 4, animationDelay: delay }}
    >
      <Icon className="h-5 w-5 text-white" />
    </div>
  );
}

// Каналы связи: четыре иконки в сетке 2×2 (Интеграции)
function Channels() {
  const items: LucideIcon[] = [Send, MessageCircle, MessagesSquare, Globe];
  return (
    <div className="grid w-44 grid-cols-2 gap-4">
      {items.map((Icon, i) => (
        <Tile key={i} Icon={Icon} delay={`${-i * 1.2}s`} className={i % 2 ? 'translate-y-6' : ''} />
      ))}
    </div>
  );
}

// Отрасли: иконки на орбите вокруг центра (Решения)
function Industries() {
  const items: LucideIcon[] = [Scissors, Stethoscope, Car, Dumbbell];
  return (
    <div className="relative h-56 w-56">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-8 rounded-full border border-dashed border-white/15" />
      <div className="orbit absolute inset-0">
        {items.map((Icon, i) => {
          const angle = (i * 360) / items.length;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translateY(-112px) rotate(-${angle}deg) translate(-50%, -50%)` }}
            >
              <div className="tile flex h-10 w-10 items-center justify-center rounded-lg">
                <Icon className="h-4 w-4 text-white" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink">
        <Building2 className="h-5 w-5 text-white" />
      </div>
    </div>
  );
}

// Путь шагов: пять узлов, соединённых линией (Как это работает)
function Flow() {
  const items: LucideIcon[] = [UserPlus, Building2, Settings2, Plug, Bot];
  return (
    <div className="relative flex w-44 flex-col gap-5">
      <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-white/60 via-white/25 to-transparent" />
      {items.map((Icon, i) => (
        <div key={i} className="relative flex items-center gap-4">
          <div className="tile flex h-12 w-12 items-center justify-center rounded-full">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <span className="h-px w-6 bg-white/20" />
        </div>
      ))}
    </div>
  );
}

// Часы с вращающейся стрелкой и плашками Zap и Brain (Преимущества)
function Clock3D() {
  return (
    <div className="relative h-56 w-56">
      <div className="absolute inset-0 rounded-full border border-white/15 shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]" />
      <div className="absolute inset-4 rounded-full border border-dashed border-white/10" />
      <div className="orbit-slow absolute inset-0">
        <span className="absolute left-1/2 top-1/2 h-[42%] w-px -translate-x-1/2 origin-bottom bg-white" style={{ top: '8%' }} />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink">
        <Clock className="h-5 w-5 text-white" />
      </div>
      <Tile Icon={Zap} className="absolute -right-4 top-4" />
      <Tile Icon={Brain} className="absolute -left-4 bottom-4" delay="-3s" />
    </div>
  );
}

// Стопка сообщений: клиент, AI, сотрудник (Демо)
function ChatStack() {
  return (
    <div className="flex w-44 flex-col gap-4">
      <Tile Icon={User} className="self-start" />
      <Tile Icon={Bot} className="ml-10" delay="-2s" />
      <Tile Icon={MessageSquare} className="self-start" delay="-4s" />
    </div>
  );
}

// Ценник и карта оплаты (Тарифы)
function PriceCard() {
  return (
    <div className="relative h-56 w-48">
      <div className="card-tone absolute left-0 top-6 h-36 w-40 rounded-2xl" />
      <div className="tile absolute right-0 top-0 flex h-14 w-14 items-center justify-center rounded-xl">
        <Tag className="h-5 w-5 text-white" />
      </div>
      <div className="tile absolute bottom-2 right-4 flex h-12 w-12 items-center justify-center rounded-xl">
        <Wallet className="h-5 w-5 text-white" />
      </div>
      <div className="absolute left-4 top-12 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20">
        <CreditCard className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}

// Щит с замком и ключом (Безопасность)
function Shield() {
  return (
    <div className="relative h-56 w-56">
      <div className="float tile absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl">
        <ShieldCheck className="h-10 w-10 text-white" />
      </div>
      <div className="float tile absolute left-0 top-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ animationDelay: '-2s' }}>
        <Lock className="h-4 w-4 text-white" />
      </div>
      <div className="float tile absolute bottom-4 right-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{ animationDelay: '-4s' }}>
        <KeyRound className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}

// Вопросы и подсказки (FAQ)
function HelpStack() {
  return (
    <div className="relative h-52 w-48">
      <Tile Icon={HelpCircle} className="absolute left-0 top-0" />
      <Tile Icon={Info} className="absolute right-0 top-10" delay="-2s" />
      <Tile Icon={Lightbulb} className="absolute bottom-0 left-8" delay="-4s" />
    </div>
  );
}

// Ракета и искры (Финальный блок)
function Launch() {
  return (
    <div className="relative h-56 w-56">
      <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
      <div className="orbit-slow absolute inset-0">
        <Sparkles className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 text-white" />
      </div>
      <div className="float tile absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl">
        <Rocket className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}
