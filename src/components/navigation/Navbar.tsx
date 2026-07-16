import Container from "../layout/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">
              Ibrahim Kimani Maina
            </h1>

            <p className="text-sm text-zinc-400">
              Full Stack Software Engineer
            </p>
          </div>

          <button
            className="
              rounded-lg
              border
              border-zinc-700
              px-4
              py-2
              text-sm
              hover:bg-zinc-900
            "
          >
            🌙
          </button>
        </div>
      </Container>
    </header>
  );
}