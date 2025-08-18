// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// ✅ Prevent build-time evaluation
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // 👈 sender
      to: "aljoybascon.programmer@gmail.com", // 👈 your inbox
      subject: `New Contact from ${name}`,
      text: `From: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
