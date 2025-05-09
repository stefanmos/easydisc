import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Check,
  Camera,
  Calculator,
  CreditCard,
  Package,
  MapPin,
  Car,
  Building,
  Clock,
  Shield,
  Truck,
  Globe,
} from "lucide-react"
import { HowItWorksCard } from "@/components/how-it-works-card"
import { FeatureCard } from "@/components/feature-card"
import { ComparisonTable } from "@/components/comparison-table"
import { TargetAudienceCard } from "@/components/target-audience-card"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <span className="text-xl font-bold">Easydisc</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#comparison" className="text-sm font-medium hover:text-primary transition-colors">
              Comparison
            </Link>
            <Link href="#audience" className="text-sm font-medium hover:text-primary transition-colors">
              Who It's For
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Request a Business Quote
            </Button>
            <Button>Renew Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />

        <section id="for-who" className="py-12 bg-muted/50">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">For Individuals and Businesses</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're managing one car or an entire fleet, Easydisc helps you renew your vehicle license disks
                online — quickly, securely, and without the admin headache.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Easydisc?</h2>
              <div className="w-20 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="100% Online Process"
                description="No trips to the traffic department. Just upload your license disk or vehicle details and we'll calculate your renewal cost in seconds."
              />
              <FeatureCard
                icon={<Truck className="h-10 w-10 text-primary" />}
                title="Nationwide Delivery"
                description="We deliver anywhere in South Africa — directly to your home, office, or depot. You'll get tracking updates every step of the way."
              />
              <FeatureCard
                icon={<Building className="h-10 w-10 text-primary" />}
                title="Fleet & Business Ready"
                description="Bulk renewals, consolidated billing, and easy tracking — built for businesses that manage multiple vehicles."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Safe & Secure Payments"
                description="All transactions are encrypted and processed through trusted payment gateways. Your data is never shared or sold."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-primary" />}
                title="Fast Turnaround"
                description="We process your renewal as soon as payment is received. Most disks are dispatched within 48–72 hours.*"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our simple 5-step process makes renewing your license disk effortless
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <HowItWorksCard
                step={1}
                icon={<Camera className="h-8 w-8 text-primary" />}
                title="Snap & Upload"
                description="Take a picture of your current license disk or enter your vehicle details manually."
              />
              <HowItWorksCard
                step={2}
                icon={<Calculator className="h-8 w-8 text-primary" />}
                title="Get a Quote"
                description="We instantly calculate the cost of your renewal — including licensing fees and delivery."
              />
              <HowItWorksCard
                step={3}
                icon={<CreditCard className="h-8 w-8 text-primary" />}
                title="Pay Securely"
                description="Make fast, safe payments via card, EFT, or Discovery's secure SCIA gateway."
              />
              <HowItWorksCard
                step={4}
                icon={<Package className="h-8 w-8 text-primary" />}
                title="We Handle the Rest"
                description="Our team submits and processes your renewal with the licensing department."
              />
              <HowItWorksCard
                step={5}
                icon={<MapPin className="h-8 w-8 text-primary" />}
                title="Track Your Delivery"
                description="You'll get a tracking number to monitor your delivery in real time."
              />
            </div>
          </div>
        </section>

        <section id="audience" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perfect for:</h2>
              <div className="w-20 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TargetAudienceCard
                title="Busy Individuals"
                description="Who don't have time for long queues"
                icon={<Clock className="h-8 w-8" />}
              />
              <TargetAudienceCard
                title="Small Businesses"
                description="And startups managing their own vehicles"
                icon={<Building className="h-8 w-8" />}
              />
              <TargetAudienceCard
                title="Fleet Managers"
                description="Looking for a more efficient renewal system"
                icon={<Car className="h-8 w-8" />}
              />
              <TargetAudienceCard
                title="Logistics Companies"
                description="Across South Africa"
                icon={<Truck className="h-8 w-8" />}
              />
              <TargetAudienceCard
                title="Anyone"
                description="Who wants a fast, stress-free renewal process"
                icon={<Check className="h-8 w-8" />}
              />
            </div>
          </div>
        </section>

        <section id="comparison" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Easydisc vs. Traditional Renewal</h2>
              <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how Easydisc compares to the traditional license disk renewal process
              </p>
            </div>

            <ComparisonTable />
          </div>
        </section>

        <section id="cta" className="py-20 bg-black text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Waste Another Minute in Line</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of South Africans already using Easydisc. Start your renewal in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                Renew Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Request a Business Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6" />
                <span className="text-xl font-bold">Easydisc</span>
              </div>
              <p className="text-muted-foreground">Vehicle License Disk Renewal Made Effortless</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#comparison" className="text-muted-foreground hover:text-primary transition-colors">
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
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Email: info@easydisc.co.za</li>
                <li className="text-muted-foreground">Phone: +27 (0) 12 345 6789</li>
                <li className="text-muted-foreground">Address: Cape Town, South Africa</li>
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
