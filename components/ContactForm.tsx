"use client";

import { useState } from "react";

const TO_EMAIL = "mandus85@hotmail.com"; // <-- ändra om behövs

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const size = String(form.get("size") || "");
    const period = String(form.get("period") || "");
    const message = String(form.get("message") || "");

    // Bygg mailto
    const subject = `Förrådsförfrågan – ${size || "okänd storlek"} (${
      period || "period ej vald"
    })`;
    const bodyLines = [
      "Ny förfrågan från hemsidan:",
      "",
      `Namn: ${name}`,
      `E-post: ${email}`,
      `Förrådsstorlek: ${size}`,
      `Period: ${period}`,
      "",
      "Meddelande:",
      message,
    ];
    const body = bodyLines.join("\n");

    const href = `mailto:${encodeURIComponent(
      TO_EMAIL
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      // Öppna besökarens e-postklient
      window.location.href = href;
      setOk("Öppnar din e-postapp… Skicka mailet därifrån.");
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setErr(
        "Kunde inte öppna e-postklienten. Prova gärna att manuellt kopiera vår mail adress och maila från din valda epost applikation."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm subtle">Namn</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/20"
          />
        </div>
        <div>
          <label className="text-sm subtle">E-post</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/20"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm subtle">Förrådsstorlek</label>
          <select
            name="size"
            className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10 focus:outline-none"
            required
          >
            <option className="text-slate-900" value="4 m²">
              4 m²
            </option>
            <option className="text-slate-900" value="5 m²">
              5 m²
            </option>
            <option className="text-slate-900" value="6 m²">
              6 m²
            </option>
            <option className="text-slate-900" value="7 m²">
              7 m²
            </option>
            <option className="text-slate-900" value="8 m²">
              8 m²
            </option>
            <option className="text-slate-900" value="10 m²">
              10 m²
            </option>
            <option className="text-slate-900" value="11 m²">
              11 m²
            </option>
            <option className="text-slate-900" value="12 m²">
              12 m²
            </option>
            <option className="text-slate-900" value="13 m²">
              13 m²
            </option>
          </select>
        </div>
        <div>
          <label className="text-sm subtle">Period</label>
          <select
            name="period"
            className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10 focus:outline-none"
            required
          >
            <option className="text-slate-900" value="1-3 månader">
              1–3 månader
            </option>
            <option className="text-slate-900" value="3-6 månader">
              3–6 månader
            </option>
            <option className="text-slate-900" value="6+ månader">
              6+ månader
            </option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-sm subtle">Meddelande</label>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10 focus:outline-none"
          placeholder="Berätta gärna kort vad du behöver plats för och när du vill starta hyran."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary text-white"
      >
        {loading ? "Öppnar e-post…" : "Skicka förfrågan"}
      </button>
      {ok && <p className="text-emerald-400 text-sm">{ok}</p>}
      {err && <p className="text-rose-400 text-sm">{err}</p>}
      <p className="text-xs subtle">
        När du klickar “Skicka förfrågan” öppnas din e-postapp med uppgifterna
        ifyllda. Skicka mailet därifrån. Genom att skicka godkänner du att vi
        lagrar dina uppgifter för att kontakta dig om din förfrågan (GDPR).
      </p>
    </form>
  );
}
