import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FontAwesomeIcon icon={service.icon} className="size-6" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">{service.subtitle}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{service.title}</h1>
              <div className="gradient-divider w-20 mb-6" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex">
                <Button size="lg">Inquire About {service.title}</Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover min-h-[400px]" />
            </div>
          </div>

          {/* Details */}
          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="space-y-4">
              {service.details.map((d, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{d}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Other Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services.filter((s) => s.slug !== slug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="inline-flex">
                <Button variant="outline" size="sm">{s.title}</Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
