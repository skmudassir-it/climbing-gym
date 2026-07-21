import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faMountain } from "@fortawesome/free-solid-svg-icons";
import { pricing, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing & Memberships",
  description: "Transparent pricing for SummitLine Climbing Gym. Day passes, memberships, punch cards, and annual plans. First visit free.",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Simple, Transparent Pricing</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              No initiation fees. No contracts. No surprises. Just great climbing at a fair price.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {pricing.map((tier) => (
              <Card key={tier.name} className={`glass-card overflow-hidden flex flex-col ${tier.highlighted ? "ring-2 ring-primary scale-[1.03]" : ""}`}>
                <CardHeader>
                  {tier.highlighted && <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Best Value</Badge>}
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Frequently Asked Questions</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon icon={faMountain} className="size-12 mb-5 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Still Have Questions?</h2>
          <p className="text-lg opacity-90 mb-8">
            Drop us a message or stop by the gym. We&apos;d love to show you around.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
