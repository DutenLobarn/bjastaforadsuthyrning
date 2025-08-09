# Förrådsuthyrning (Next.js + Tailwind)

Modern, SEO-vänlig hemsida för förrådsuthyrning byggd med Next.js (App Router) och Tailwind.

## Funktioner
- Responsiv, snabb, tillgänglig
- SEO (SSR/SSG, metadata, Open Graph)
- Sektioner: Hero, Storlekar & priser, FAQ, Villkor, Kontakt
- Kontakt: Telefon, e-post + formulär (skickas via Resend API / loggas i dev)
- Klara att deploya på Vercel

## Kom igång
```bash
pnpm i   # eller npm install / yarn
pnpm dev # http://localhost:3000
```

## E-post (Resend)
Skapa `.env.local` i projektroten:
```
RESEND_API_KEY=your_resend_key
TO_EMAIL=mandus85@hotmail.com
FROM_EMAIL=kontakt@dindomän.se
```
Utan RESEND_API_KEY loggas meddelandet i serverkonsolen i dev/preview.

## Deploy (Vercel)
1. Skapa ett GitHub-repo och pusha koden.
2. Importera repot i https://vercel.com → välj `Next.js`.
3. Lägg till env vars (RESEND_API_KEY, TO_EMAIL, FROM_EMAIL).
4. Deploy! (automatiskt vid varje push).

## Anpassningar
- Uppdatera text, priser och ev. ort i komponenterna: `Hero`, `Pricing`, `FAQ`, `Terms`.
- Lägg in logotyp i `public/` och byt ut i `Header`.
- Justera färgpalett i `tailwind.config.ts`.

## Licens
MIT