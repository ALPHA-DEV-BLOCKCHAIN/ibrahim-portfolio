import Navbar from "../navigation/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {children}
    </div>
  );
}