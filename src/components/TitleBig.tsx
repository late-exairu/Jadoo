export default function TitleBig({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-text-black font-serif text-3xl font-bold leading-[1.3] lg:text-[50px] ${className}`}
    >
      {children}
    </div>
  );
}
