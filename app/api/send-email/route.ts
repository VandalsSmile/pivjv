import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    let subject = "";
    let html = "";

    if (type === "contact") {
      subject = `New Contact Form Submission from ${data.name}`;
      html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    } else if (type === "specials") {
      subject = `New Specials Opt-in from ${data.name}`;
      html = `
        <h2>New Specials Opt-in</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p>This person wants to receive special offers and promotions.</p>
      `;
    } else {
      return NextResponse.json(
        { error: "Invalid form type" },
        { status: 400 }
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Prime IV Huntsville <onboarding@resend.dev>",
      to: ["jonesvalley@primeivhydration.com"],
      subject,
      html,
      replyTo: data.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
