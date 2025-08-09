type Plan = {
  name: string;
  price: string;
  description: string;
};
const plans: Plan[] = [
  {
    name: "4 m²",
    price: "från 429 kr/månad*",
    description: "Smart för säsongsprylar, lådor och mindre möbler.",
  },
  {
    name: "5 m²",
    price: "från 529 kr/månad*",
    description: "Lite större – funkar för fler lådor och små möbler.",
  },
  {
    name: "6 m²",
    price: "från 629 kr/månad*",
    description: "Rymmer cykel, lådor och delar av ett mindre bohag.",
  },
  {
    name: "7 m²",
    price: "från 729 kr/månad*",
    description: "Bra allroundstorlek vid renovering/flytt.",
  },
  {
    name: "8 m²",
    price: "från 829 kr/månad*",
    description: "Lagom för 2 rok – soffdelar, cyklar, kartonger.",
  },
  {
    name: "10 m²",
    price: "från 1029 kr/månad*",
    description: "Mer luft för större möbler och vitvaror.",
  },
  {
    name: "11 m²",
    price: "från 1129 kr/månad*",
    description: "För större bohag eller utrustning.",
  },
  {
    name: "12 m²",
    price: "från 1229 kr/månad*",
    description: "Hela bohag, större möbler och maskiner.",
  },
  {
    name: "13 m²",
    price: "från 1329 kr/månad*",
    description: "Maximalt utrymme när du behöver plats.",
  },
];

export default function Pricing() {
  return (
    <section id="storlekar" className="container py-12 scroll-mt-[72px]">
      <h2 className="section-h">Storlekar & priser</h2>
      <p className="subtle mt-2">
        Förråd från 4 till 13 m². Kontakta oss för lediga förråd och offert.
      </p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="card p-6">
            <h3 className="text-xl font-semibold mt-1">{p.name}</h3>
            <div className="text-2xl font-bold mt-4">{p.price}</div>
            <p className="subtle mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
