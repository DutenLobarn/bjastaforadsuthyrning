import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Terms from "@/components/Terms";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Info from "@/components/Info";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Info />
      <Pricing />
      <section id="kontakt" className="container py-12 scroll-mt-[72px]">
        <h2 className="section-h">Kontakta oss</h2>
        <p className="subtle mt-2">
          Ring eller maila – eller fyll i formuläret så återkommer vi.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="grid gap-2">
              <a className="btn btn-primary text-white" href="tel:+46735319098">
                Ring 073-531 90 98
              </a>
              <a className="btn" href="mailto:mandus85@hotmail.com">
                Maila mandus85@hotmail.com
              </a>
              <a
                className="btn"
                href="https://www.google.com/maps?q=Orkesterv%C3%A4gen%2019,%20893%2030%20Bj%C3%A4sta"
                target="_blank"
                rel="noreferrer"
              >
                Hitta hit
              </a>
              <p className="text-xs subtle mt-2">
                Adress: Orkestervägen 19, 893 30 Bjästa
              </p>
              <p className="text-xs subtle">
                Öppet för kontakt vardagar 09–17 (helg: svar i mån av tid).
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <FAQ />
      <Terms />
      <Footer />
    </main>
  );
}
