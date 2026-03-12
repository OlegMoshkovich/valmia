import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.VALMIA_RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "ValMia <onboarding@resend.dev>",
    to: "jasmin@valmia.ch",
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
