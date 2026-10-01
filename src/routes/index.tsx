import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 sm:px-10">
      <h1 className="text-balance text-center text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
        Hello World
      </h1>
    </main>
  );
}
