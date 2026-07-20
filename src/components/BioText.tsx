export default function BioText({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm leading-relaxed text-white-muted ${className}`}>
      Angelina Wu is a designer, builder, and doer who&apos;s passionate about creating channels for{' '}
      <span className="accent-text">delight</span> and{' '}
      <span className="accent-text">human connection</span>. She is currently studying Design & Applied Math at UCLA and can be found building cute websites, reading speculative fiction, or finding a new favorite color.
    </p>
  );
}
