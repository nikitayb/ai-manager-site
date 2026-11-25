// Знак Nimbus Pulse, вариант D: линия пульса.
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
      <path
        d="M3 16h5l2-6 4 12 3-9 2 3h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
