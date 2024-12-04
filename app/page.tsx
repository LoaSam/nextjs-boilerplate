import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start">
        <Dashboard />
      </main>
    </div>
  );
}