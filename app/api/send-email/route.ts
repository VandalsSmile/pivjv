import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_RECIPIENTS = [
  "jonesvalley@primeivhydration.com",
  "leads@vs.marketing",
];
const FROM_EMAIL = "VS Marketing Alerts <leads@huntsvilleiv.com>";
const NOTIFICATION_SUBJECT = "New Lead from your Website";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    let notificationHtml = "";
    let confirmationHtml = "";
    let confirmationSubject = "";

    if (type === "contact") {
      notificationHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Source:</strong> Huntsville IV Website - Contact Form</p>
        <hr />
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "No message provided"}</p>
      `;
      
      confirmationSubject = "Thank you for contacting Prime IV Huntsville!";
      confirmationHtml = `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${data.name},</p>
        <p>We received your message and will be in touch within 24 hours to discuss your wellness goals.</p>
        <hr />
        <h3>Your Submission Details:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${data.message || "No message provided"}</p>
        <hr />
        <p>In the meantime, feel free to call us at <a href="tel:2566926347">(256) 692-6347</a> if you have any questions.</p>
        <p>Best regards,<br />The Prime IV Huntsville Team</p>
        <p><small>2626 Carl T. Jones Drive Suite B, Huntsville, AL 35802</small></p>
      `;
    } else if (type === "specials") {
      notificationHtml = `
        <h2>New Specials Request</h2>
        <p><strong>Source:</strong> Huntsville IV Website - Specials Form</p>
        <hr />
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Special Requested:</strong> ${data.special || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "No message provided"}</p>
      `;
      
      confirmationSubject = "Your Prime IV Huntsville Special Request!";
      confirmationHtml = `
        <h2>Thank You for Your Interest!</h2>
        <p>Hi ${data.name},</p>
        <p>We received your special offer request and will be in touch within 24 hours to confirm your appointment and apply your discount.</p>
        <hr />
        <h3>Your Submission Details:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Special Requested:</strong> ${data.special || "Not specified"}</p>
        <p><strong>Message:</strong> ${data.message || "No message provided"}</p>
        <hr />
        <p>Can't wait? Call us now at <a href="tel:2566926347">(256) 692-6347</a> to book your appointment!</p>
        <p>Best regards,<br />The Prime IV Huntsville Team</p>
        <p><small>2626 Carl T. Jones Drive Suite B, Huntsville, AL 35802</small></p>
      `;
    } else {
      return NextResponse.json(
        { error: "Invalid form type" },
        { status: 400 }
      );
    }

    // Send notification email to business
    const { error: notificationError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_RECIPIENTS,
      subject: NOTIFICATION_SUBJECT,
      html: notificationHtml,
      replyTo: data.email,
    });

    if (notificationError) {
      console.error("Notification email error:", notificationError);
      return NextResponse.json(
        { error: notificationError.message },
        { status: 500 }
      );
    }

    // Send confirmation email to form submitter
    const { error: confirmationError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [data.email],
      subject: confirmationSubject,
      html: confirmationHtml,
    });

    if (confirmationError) {
      console.error("Confirmation email error:", confirmationError);
      // Don't fail the request if confirmation fails, notification was sent
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
