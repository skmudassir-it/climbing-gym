import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHeart, faUsers, faBullseye, faMedal } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "SummitLine Climbing Gym was founded by climbers, for climbers. Learn about our story, mission, and the team behind Colorado's premier climbing facility.",
};

const values = [
  { icon: faHeart, title: "Community First", text: "Climbing is better together. We foster an inclusive, supportive environment where every climber belongs." },
  { icon: faMedal, title: "Excellence", text: "From route setting to coaching, we hold ourselves to the highest standards. Every hold, every session, every interaction matters." },
  { icon: faBullseye, title: "Growth", text: "Whether you're sending your first V0 or projecting V10, we're here to help you improve. Progress is the point." },
  { icon: faUsers, title: "Accessibility", text: "Climbing should be for everyone. We offer scholarships, adaptive programs, and a welcoming space for all abilities and backgrounds." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Built by Climbers, For Climbers</h1>
              <div className="gradient-divider w-20 mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                SummitLine started in 2018 with a simple idea: build the kind of gym we&apos;d want to climb at.
                Founder Marcus Webb had spent two decades climbing on the IFSC circuit and training in gyms
                around the world. He knew what worked — and what didn&apos;t.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We opened our doors with 8,000 square feet of climbing surface, a commitment to weekly route
                resets, and a belief that great climbing communities are built on great experiences. Five years
                later, we&apos;ve grown to 18,000 square feet with 80+ routes, but that core belief hasn&apos;t changed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, SummitLine is home to 1,200+ members, a nationally ranked youth team, and some of the
                best route setting in Colorado. But ask anyone here what makes this place special, and they&apos;ll
                tell you the same thing: it&apos;s the people.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/about/gym-interior.jpg" alt="SummitLine gym interior" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">What We Stand For</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <FontAwesomeIcon icon={v.icon} className="size-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Meet the Team</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {team.map((m) => (
              <Card key={m.name} className="glass-card overflow-hidden">
                <div className="overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-64 object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <Badge className="mt-1 mb-3 bg-primary/10 text-primary border-primary/20">{m.role}</Badge>
                  <p className="text-sm text-muted-foreground">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photo */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <img src="/images/about/community.jpg" alt="SummitLine climbing community" className="w-full h-72 object-cover" />
          </div>
          <p className="text-center mt-6 text-muted-foreground max-w-xl mx-auto">
            Our community is what makes SummitLine special. Come climb with us and see for yourself.
          </p>
        </div>
      </section>
    </>
  );
}
