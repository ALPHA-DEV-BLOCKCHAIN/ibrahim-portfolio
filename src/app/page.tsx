import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <section
          className="
            mt-10
            grid
            gap-8
            lg:grid-cols-3
          "
        >
          <div className="rounded-xl border border-zinc-800 p-6">
            Left Panel
          </div>

          <div className="rounded-xl border border-zinc-800 p-6 lg:col-span-2">
            Right Panel
          </div>
        </section>
      </Container>
    </MainLayout>
  );
}