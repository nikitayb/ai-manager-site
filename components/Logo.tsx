// Знак Nimbus Pulse, вариант E: круг с волной внутри.
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
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M7 18q2.3-4 4.5 0t4.5 0 4.5 0 3.5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
