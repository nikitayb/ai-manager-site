import { Bell, CalendarClock, MessageSquare, ShieldCheck } from 'lucide-react';

// Декоративные элементы по бокам секций. Только на широких экранах (от 1024px).
// Скрыты от экранных читалок и не перехватывают клики.
type Variant = 'cube' | 'rings' | 'icons' | 'wave';

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
      {variant === 'icons' && <IconStack />}
      {variant === 'wave' && <Wave />}
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

// Стопка иконок-плашек, каждая покачивается с задержкой
function IconStack() {
  const items = [
    { Icon: MessageSquare, offset: 'mr-0', delay: '0s' },
    { Icon: CalendarClock, offset: 'ml-10', delay: '-1.5s' },
    { Icon: ShieldCheck, offset: 'mr-6', delay: '-3s' },
    { Icon: Bell, offset: 'ml-14', delay: '-4.5s' },
  ];
  return (
    <div className="flex w-44 flex-col gap-4">
      {items.map(({ Icon, offset, delay }, i) => (
        <div
          key={i}
          className={`float tile flex h-12 w-12 items-center justify-center rounded-xl ${offset}`}
          style={{ animationDelay: delay }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      ))}
    </div>
  );
}

// Стопка линий пульса разной яркости
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
