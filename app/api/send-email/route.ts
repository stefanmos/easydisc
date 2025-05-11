import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    const company = formData.get('company')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const fleetSize = formData.get('fleetSize')
    const message = formData.get('message')

    const emailContent = `
      New Business Enquiry from ${name}
      
      Company: ${company}
      Email: ${email}
      Phone: ${phone}
      Fleet Size: ${fleetSize}
      
      Message:
      ${message}
    `

    const { data, error } = await resend.emails.send({
      from: 'Easydisc Business Enquiries <noreply@easydisc.co.za>',
      to: 'enquiries@easydisc.co.za',
      subject: `New Business Enquiry from ${name}`,
      text: emailContent,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 