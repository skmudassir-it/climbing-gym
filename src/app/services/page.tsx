import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore SummitLine's full range of climbing services: bouldering, top-rope, lead climbing, youth programs, private coaching, group events, and memberships.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Services</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              From your first time on the wall to sending your project, we have a program for every climber.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`}>
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
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{svc.description}</p>
                    <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
