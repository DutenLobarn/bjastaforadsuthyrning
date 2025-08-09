export default function Header() {
  return (
    <header className="border-b border-white/10 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 z-50">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Bjästa Förrådsuthyrning"
            className="h-10 w-auto rounded-lg"
          />
          <span className="font-semibold tracking-tight">
            Bjästa Förrådsuthyrning
          </span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm subtle">
          <a href="#storlekar" className="hover:text-white">
            Storlekar
          </a>
          <a href="#fragor" className="hover:text-white">
            FAQ
          </a>
          <a href="#kontakt" className="hover:text-white">
            Kontakt
          </a>
          <a href="#villkor" className="hover:text-white">
            Villkor
          </a>
        </nav>
        <a
          href="tel:+46735319098"
          className="btn btn-primary text-white text-sm"
        >
          Ring 073-531 90 98
        </a>
      </div>
    </header>
  );
}
