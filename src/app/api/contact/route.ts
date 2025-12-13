import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/contact/EmailTemplate';
import { ContactFormData, ApiResponse } from '@/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const { name, email, message }: ContactFormData = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'EDB Contact Form <onboarding@resend.dev>',
      to: process.env.MY_EMAIL_ADDRESS!,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      react: EmailTemplate({ senderName: name, messageBody: message }),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}
