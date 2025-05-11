'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function BusinessEnquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setSubmitStatus('success')
      router.refresh()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Easydisc Logo"
              width={0}
              height={30}
              style={{ height: 30, width: 'auto' }}
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/#comparison" className="text-sm font-medium hover:text-primary transition-colors">
              Comparison
            </Link>
            <Link href="/#audience" className="text-sm font-medium hover:text-primary transition-colors">
              Who It's For
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Request a Business Quote
            </Button>
            <Link href="https://tally.so/r/mDbMQ5" target="_blank" rel="noopener noreferrer">
              <Button>Renew Now</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-muted/50 py-16">
        <div className="container max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Business Enquiry</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Fill out the form below and our team will get back to you with a tailored quote for your business or fleet.
          </p>
          {submitStatus === 'success' ? (
            <div className="text-center p-4 bg-green-50 text-green-700 rounded-lg">
              <p className="font-medium">Thank you for your enquiry!</p>
              <p>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-6">
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                  <p>Sorry, there was an error sending your enquiry. Please try again.</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input name="name" type="text" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Company</label>
                  <input name="company" type="text" className="w-full border rounded px-3 py-2" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input name="email" type="email" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone</label>
                  <input name="phone" type="tel" className="w-full border rounded px-3 py-2" required />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Fleet Size</label>
                <input name="fleetSize" type="number" min="1" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea name="message" className="w-full border rounded px-3 py-2" rows={4} required />
              </div>
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>

      <footer className="bg-background border-t py-12 mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Easydisc Logo"
                  width={0}
                  height={30}
                  style={{ height: 30, width: 'auto' }}
                  priority
                />
              </div>
              <p className="text-muted-foreground">Vehicle License Disk Renewal Made Effortless</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#comparison" className="text-muted-foreground hover:text-primary transition-colors">
                    Comparison
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Email: info@easydisc.co.za</li>
                <li className="text-muted-foreground">Phone: +27 (0) 12 345 6789</li>
                <li className="text-muted-foreground">Address: 1 Whiteley Rd, Melrose, Johannesburg, 2076, South Africa</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Easydisc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 