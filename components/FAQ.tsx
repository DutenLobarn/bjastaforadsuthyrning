const items = [
  {
    q: "När kan jag komma åt förrådet?",
    a: "Alla dagar 7–22.",
  },
  {
    q: "Hur fungerar låsningen?",
    a: "Du använder ett eget hänglås för hög säkerhet.",
  },
  {
    q: "Ingår försäkring?",
    a: "Innehållet i ditt förråd täcks av din egen hemförsäkring.",
  },
  {
    q: "Vad gäller vid utflytt?",
    a: "Förrådet ska vara urstädat senast på utflyttningsdatum. Överträdelse kan debiteras med 500 kr.",
  },
  { q: "Minsta hyrtid?", a: "1 månad." },
  { q: "Uppsägning?", a: "Uppsägning senast 2 veckor innan påbörjad månad." },

  { q: "Moms?", a: "För privatpersoner är det momsbefriat." },
  {
    q: "Vad kan jag ej magasinera?",
    a: "Brandfarligt gods, kraftigt luktande gods såsom kemikalier, råvaror m.m.",
  },
];

export default function FAQ() {
  return (
    <section id="fragor" className="container py-12 scroll-mt-[72px]">
      <h2 className="section-h">Vanliga frågor</h2>
      <div className="mt-6 grid gap-4">
        {items.map((x, i) => (
          <details key={i} className="card p-5">
            <summary className="font-medium cursor-pointer">{x.q}</summary>
            <p className="subtle mt-2">{x.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
