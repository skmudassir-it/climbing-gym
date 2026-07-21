"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";

export function TestimonialCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="max-w-5xl mx-auto">
      <CarouselContent>
        {testimonials.map((t, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <FontAwesomeIcon icon={faQuoteLeft} className="size-5 text-primary/30 mb-3" />
                <p className="text-muted-foreground mb-4 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} className="size-3.5 text-secondary" />
                  ))}
                </div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
