import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[65vh] lg:min-h-[60vh]">
      {/* Bakgrundsbild */}
      <Image
        src="/hero-bg.png"
        alt="Flyttkartonger i ett ljust rum"
        fill
        priority
        className="
          object-cover
          object-[25%_50%]            /* fokusera vänster/mitt på mobiler */
          md:object-[35%_50%]
          lg:object-[40%_50%]         /* lite mer åt mitten på stora skärmar */
        "
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60" />

      <div className="relative container py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Varm förrådsuthyrning i Bjästa – tryggt, prisvärt och enkelt
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Tillgång <strong>alla dagar 7–22</strong>. Du låser med eget
            hänglås. Förråd i många olika storlekar.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#kontakt" className="btn btn-primary text-white">
              Kontakta oss
            </a>
          </div>
        </div>

        <div className="card p-6 bg-white/10 backdrop-blur">
          <ul className="grid grid-cols-2 gap-4 text-sm">
            <li className="p-4 rounded-xl bg-white/20">
              Säker och torr förvaring
            </li>
            <li className="p-4 rounded-xl bg-white/20">Enkel åtkomst 7–22</li>
            <li className="p-4 rounded-xl bg-white/20">
              Eget lås för maximal säkerhet
            </li>
            <li className="p-4 rounded-xl bg-white/20">Stor parkering</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
