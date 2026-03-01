export default function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[1.1em] w-[0.5em] bg-accent"
      style={{ animation: 'blink 1s steps(1) infinite' }}
    />
  );
}
