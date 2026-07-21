"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Get In Touch</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to climb? Have a question? We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we&apos;ll respond promptly.</CardDescription>
            </CardHeader>
            <CardContent>
              {sent ? (
                <div className="text-center py-8">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name</label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone (optional)</label>
                    <Input name="phone" placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Service Interest</label>
                    <Input name="service" placeholder="e.g., Bouldering, Youth Program, Membership" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Message</label>
                    <Textarea name="message" placeholder="Tell us about your climbing goals or questions..." rows={4} required />
                  </div>
                  <Button type="submit" className="w-full gap-2" disabled={loading}>
                    <FontAwesomeIcon icon={faPaperPlane} className="size-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Info */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="size-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Location</h4>
                    <p className="text-sm text-muted-foreground">8500 Climb Way<br />Boulder, CO 80301</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="size-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Phone</h4>
                    <p className="text-sm text-muted-foreground">(303) 555-0147</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="size-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-sm text-muted-foreground">climb@summitline.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faClock} className="size-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Mon–Fri: 6 AM – 10 PM<br />
                      Sat–Sun: 8 AM – 9 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">First Visit Is Free!</h4>
                <p className="text-sm text-muted-foreground mb-4">Walk in anytime during operating hours. No appointment needed for your first climb.</p>
                <Link href="/pricing" className="inline-flex">
                  <Button variant="outline" size="sm">View Pricing</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
