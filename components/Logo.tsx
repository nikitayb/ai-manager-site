// Знак Nimbus Pulse: скруглённый квадрат, внутри «облако» из двух дуг и линия пульса.
// Монохромный, наследует цвет через currentColor.
type Props = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 24, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="1" y="1" width="30" height="30" rx="9" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <path
        d="M9 19.5a4.5 4.5 0 0 1 .4-8.97A6 6 0 0 1 21 11.6a3.9 3.9 0 0 1 .5 7.9H9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 22.2h2.2l1.4-2.6 2.1 4.6 1.9-3.4h1.7l.7-1.2 1.1 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
