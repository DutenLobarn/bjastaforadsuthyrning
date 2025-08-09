import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, size, period, message } = data || {};

  // If RESEND is not configured, just log and return OK for demo/dev.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.TO_EMAIL || "mandus85@hotmail.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || "no-reply@yourdomain.se";

  const body = `Ny förfrågan från hemsidan:
Namn: ${name}
E-post: ${email}
Förrådsstorlek: ${size}
Period: ${period}
Meddelande: ${message}`;

  try {
    if (!RESEND_API_KEY) {
      console.log("[CONTACT] (dev) =>", body);
      return NextResponse.json({ ok: true });
    }
    // Minimal Resend call without SDK to avoid extra dependency
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: "Ny förrådsförfrågan",
        text: body
      })
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", text);
      return NextResponse.json({ ok: false, error: "E-post kunde inte skickas" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Tekniskt fel" }, { status: 500 });
  }
}