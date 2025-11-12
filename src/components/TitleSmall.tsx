export default function TitleSmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-text mb-2 text-lg font-semibold ${className}`}>
      {children}
    </div>
  );
}
