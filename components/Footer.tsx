export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">Förråds Hotel Bjästa</div>
          <p className="subtle mt-2">
            Prisvärd magasinering med generösa öppettider.
          </p>
        </div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <ul className="mt-2 text-sm">
            <li>
              <a
                className="hover:underline"
                href="mailto:forradshotelbjasta@hotmail.com"
              >
                E-post: forradshotelbjasta@hotmail.com
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.google.com/maps?q=Orkesterv%C3%A4gen%2019,%20893%2030%20Bj%C3%A4sta"
                target="_blank"
                rel="noreferrer"
              >
                Orkestervägen 19, 893 30 Bjästa
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm subtle">
          © {new Date().getFullYear()} Förråds Hotel Bjästa. Alla rättigheter
          förbehållna.
        </div>
      </div>
    </footer>
  );
}
