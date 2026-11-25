// Карта сигнала: все каналы сходятся в одну точку, где работает AI-менеджер.
// Пульсы движутся от каналов к центру. Чисто SVG, без иконок и растровых картинок.
const cx = 300;
const cy = 150;

const channels = [
  { label: 'Telegram', x: 90, y: 60, anchor: 'start' as const, dy: -14 },
  { label: 'WhatsApp Business', x: 510, y: 60, anchor: 'end' as const, dy: -14 },
  { label: 'VK', x: 90, y: 240, anchor: 'start' as const, dy: 28 },
  { label: 'Сайт', x: 510, y: 240, anchor: 'end' as const, dy: 28 },
];

export default function SignalMap() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="mx-auto w-full max-w-3xl"
      role="img"
      aria-labelledby="signal-title signal-desc"
    >
      <title id="signal-title">Каналы связи сходятся к AI-менеджеру</title>
      <desc id="signal-desc">Telegram, WhatsApp Business, VK и чат на сайте подключены к одному AI-менеджеру.</desc>

      {/* Соединительные линии */}
      {channels.map((c) => (
        <line key={c.label} x1={c.x} y1={c.y} x2={cx} y2={cy} stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      ))}

      {/* Движущиеся пульсы от каналов к центру */}
      {channels.map((c, i) => (
        <circle key={`p-${c.label}`} r="3" fill="#ffffff">
          <animateMotion
            dur="3.2s"
            begin={`${-i * 0.8}s`}
            repeatCount="indefinite"
            path={`M${c.x} ${c.y} L${cx} ${cy}`}
          />
        </circle>
      ))}

      {/* Узлы каналов и подписи */}
      {channels.map((c) => (
        <g key={`n-${c.label}`}>
          <circle cx={c.x} cy={c.y} r="6" fill="#050505" stroke="#f2f2f2" strokeOpacity="0.6" />
          <circle cx={c.x} cy={c.y} r="2" fill="#f2f2f2" />
          <text
            x={c.x}
            y={c.y + c.dy}
            textAnchor={c.anchor}
            fill="#d4d4d4"
            fontSize="12"
            fontFamily="var(--font-inter), system-ui, sans-serif"
          >
            {c.label}
          </text>
        </g>
      ))}

      {/* Центр: AI-менеджер */}
      <circle cx={cx} cy={cy} r="46" fill="none" stroke="rgba(255,255,255,0.12)" strokeDasharray="2 5" />
      <circle cx={cx} cy={cy} r="30" fill="#0a0a0a" stroke="rgba(255,255,255,0.45)" />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fill="#f2f2f2"
        fontSize="11"
        fontWeight="500"
        fontFamily="var(--font-sora), system-ui, sans-serif"
      >
        Nimbus
      </text>
    </svg>
  );
}
