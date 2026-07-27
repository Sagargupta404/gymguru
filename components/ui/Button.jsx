import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}