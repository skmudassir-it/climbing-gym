"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectsClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Projects</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every expansion, every wall, every upgrade — built to make your climbing experience better.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Badge
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer px-3 py-1.5 text-sm ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </Badge>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((proj) => (
            <Card key={proj.slug} className="glass-card overflow-hidden group">
              <div className="overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg">{proj.title}</h3>
                  <FontAwesomeIcon icon={faArrowRight} className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">{proj.category}</Badge>
                <p className="text-sm text-muted-foreground">{proj.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
