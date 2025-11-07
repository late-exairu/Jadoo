export default function Logo({ className }: { className: string }) {
  return (
    <a href="/">
      <img src="./logo.svg" alt="Jadoo" className={`${className}`} />
    </a>
  );
}
