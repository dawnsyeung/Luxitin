export function SiteFooter() {
  return (
    <footer className="py-10">
      <div className="h-px w-full bg-[color:var(--line)]" />
      <div className="mt-6 flex flex-col gap-2 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Luxitin. All rights reserved.</p>
        <p className="text-xs">
          French-inspired biotech refinement for extraordinary hair.
        </p>
      </div>
    </footer>
  );
}

