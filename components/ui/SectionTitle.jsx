export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-14">
      <p className="text-orange-500 uppercase tracking-widest font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}