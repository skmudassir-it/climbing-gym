"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQuoteLeft, faStar, faCheckCircle, faMountain } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { services, pricing } from "@/lib/data";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function HomeClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('/images/hero/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Colorado&apos;s Premier Climbing Gym
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Scale New Heights.<br />
              <span className="text-primary">Find Your Edge.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible"
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              World-class bouldering, top-rope, and lead climbing in the heart of Boulder.
              Routes set fresh every week. Community that lifts you up. First visit free.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3">
              <Link href="/pricing" className="inline-flex">
                <Button size="lg" className="gap-2">
                  Get Started <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button size="lg" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible"
              className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" /> First Visit Free</span>
              <span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" /> Gear Included</span>
              <span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" /> No Experience Needed</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Everything You Need to Climb</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              From first-timers to seasoned crushers, our programs are built around your goals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <motion.div key={svc.slug} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i}>
                <Link href={`/services/${svc.slug}`}>
                  <Card className="glass-card overflow-hidden h-full group cursor-pointer">
                    <div className="overflow-hidden">
                      <img src={svc.image} alt={svc.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <FontAwesomeIcon icon={svc.icon} className="size-5" />
                        </div>
                        <CardTitle className="text-lg">{svc.title}</CardTitle>
                      </div>
                      <CardDescription>{svc.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">{svc.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">What Climbers Say</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Simple, Transparent Pricing</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              No hidden fees. No contracts. Just great climbing.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.slice(0, 4).map((tier, i) => (
              <motion.div key={tier.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className={`glass-card overflow-hidden h-full flex flex-col ${tier.highlighted ? "ring-2 ring-primary" : ""}`}>
                  <CardHeader>
                    {tier.highlighted && <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Most Popular</Badge>}
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
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="inline-flex">
              <Button variant="outline" size="lg">View All Plans</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon icon={faMountain} className="size-12 mb-5 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Ready to Start Climbing?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Your first visit is free — including gear rental. Walk in, sign a waiver, and get on the wall in under 10 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary">Book a Free Session</Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">See Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
