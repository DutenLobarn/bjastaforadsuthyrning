export default function Header() {
  return (
    <header className="border-b border-white/10 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 z-50">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Förråds Hotel Bjästa"
            className="h-10 w-auto rounded-lg"
          />
          <span className="font-semibold tracking-tight">
            Förråds Hotel Bjästa
          </span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm subtle">
          <a href="#storlekar" className="hover:text-white">
            Storlekar
          </a>
          <a href="#fragor" className="hover:text-white">
            FAQ
          </a>
          <a href="#villkor" className="hover:text-white">
            Villkor
          </a>
        </nav>
        <a href="#kontakt" className="btn btn-primary text-white text-sm">
          Kontakt
        </a>
      </div>
    </header>
  );
}
