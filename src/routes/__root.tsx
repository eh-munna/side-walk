import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-[#0d1014] text-[#3994BC]">
      <header className="border-b border-slate-700">
        <nav className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 bg-[#0d1014] text-[#3994BC] sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-[#3994BC]"
            >
              Side Walk
            </Link>
            <p className="hidden text-sm text-[#3994BC] md:inline">
              React + Tailwind navigation
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded px-3 py-2 text-sm font-medium text-[#3994BC] transition hover:bg-slate-800 hover:text-[#7dc5ff] [&.active]:font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="rounded px-3 py-2 text-sm font-medium text-[#3994BC] transition hover:bg-slate-800 hover:text-[#7dc5ff] [&.active]:font-bold"
            >
              About
            </Link>
            <Link
              to="/play-with-react"
              className="rounded px-3 py-2 text-sm font-medium text-[#3994BC] transition hover:bg-slate-800 hover:text-[#7dc5ff] [&.active]:font-bold"
            >
              Playground
            </Link>
            <Link
              to="/play-with-state"
              className="rounded px-3 py-2 text-sm font-medium text-[#3994BC] transition hover:bg-slate-800 hover:text-[#7dc5ff] [&.active]:font-bold"
            >
              State
            </Link>
            <Link
              to="/play-with-effect"
              className="rounded px-3 py-2 text-sm font-medium text-[#3994BC] transition hover:bg-slate-800 hover:text-[#7dc5ff] [&.active]:font-bold"
            >
              Effect
            </Link>
            <Link
              to="/dashboard"
              className="rounded px-3 py-2 text-sm font-medium text-[#3994BC] transition hover:bg-slate-800 hover:text-[#7dc5ff] [&.active]:font-bold"
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto flex-1 px-4 py-6 sm:px-6">
        <Outlet />
      </main>
    </div>
  ),
});
