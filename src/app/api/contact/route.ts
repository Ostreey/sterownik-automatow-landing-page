import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is configured, send via Resend
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Sterowniki <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL,
        subject: `Nowe zapytanie od ${name}`,
        html: `
          <h2>Nowe zapytanie ze strony</h2>
          <p><strong>Imie:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "nie podano"}</p>
          <p><strong>Wiadomosc:</strong></p>
          <p>${message}</p>
        `,
      });
    } else {
      // Log to console in development
      console.log("Contact form submission:", { name, email, phone, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
