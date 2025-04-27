import Navbar from "../components/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-work-sans">
        <Navbar />

        {children}
    </main>
  );
} 