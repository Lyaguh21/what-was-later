import cn from "classnames";
export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `bg-white/10 backdrop-blur-lg rounded-3xl p-6 border-2 border-white/20 fade-in`,
        className,
      )}
    >
      {children}
    </div>
  );
}
