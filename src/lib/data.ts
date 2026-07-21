import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faMountain,
  faHandRock,
  faUserCheck,
  faChild,
  faUsers,
  faGraduationCap,
  faCrown,
  faRoute,
  faShield,
  faMedal,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  details: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
  role: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const services: ServiceItem[] = [
  {
    slug: "bouldering",
    title: "Bouldering",
    subtitle: "No ropes, pure power",
    description: "Our world-class bouldering area features over 3,000 sq ft of climbing surface with problems from V0 to V10, reset weekly by our expert route setters.",
    icon: faHandRock,
    image: "/images/services/bouldering.jpg",
    features: ["3,000+ sq ft of surface", "V0–V10 difficulty range", "Weekly route resets", "Competition-grade holds"],
    details: [
      "Our bouldering walls are designed for climbers of all abilities. Beginners will love our dedicated V0–V2 circuit wall with large, friendly holds and straightforward movement.",
      "Intermediate climbers can tackle our technical slabs and dynamic cave problems, while advanced climbers will find our steep overhangs and competition-style problems push their limits.",
      "All bouldering areas feature thick, high-density foam flooring and clear fall zones. We provide free chalk and rental shoes with every visit.",
    ],
  },
  {
    slug: "top-rope",
    title: "Top-Rope Climbing",
    subtitle: "Reach new heights safely",
    description: "With 45-foot walls and 50+ top-rope routes across all grades, our top-rope area offers the perfect introduction to rope climbing for beginners and a great training ground for experienced climbers.",
    icon: faRoute,
    image: "/images/services/top-rope.jpg",
    features: ["45-ft walls", "50+ routes across all grades", "Auto-belay stations", "Belay certification available"],
    details: [
      "Our top-rope walls stretch 45 feet high with routes ranging from 5.5 to 5.13a. Each route is clearly marked with color-coded tape and grade cards at the start.",
      "For solo climbers, we offer 8 auto-belay stations that let you climb without a partner. Take a 5-minute orientation and you're ready to go.",
      "New to belaying? Sign up for our Belay 101 class and get certified the same day. All top-rope climbers must pass a belay check before climbing.",
    ],
  },
  {
    slug: "lead-climbing",
    title: "Lead Climbing",
    subtitle: "Take the sharp end",
    description: "For experienced climbers ready to lead, our dedicated lead wall features steep overhangs, technical face climbing, and dynamic movement through 5.10 to 5.13 terrain.",
    icon: faShield,
    image: "/images/services/lead-climbing.jpg",
    features: ["Dedicated lead wall", "5.10–5.13 terrain", "Lead certification program", "Quickdraws pre-hung"],
    details: [
      "Our lead climbing zone features an 18-meter overhanging wall with pre-hung quickdraws on all routes. No need to hang your own — just clip and go.",
      "We require all lead climbers to pass our lead check, which includes proper clipping technique, fall-safe belaying, and route-reading skills. Our Lead Clinic runs every Saturday.",
      "Lead climbing routes are reset monthly by our IFSC-certified route setters, ensuring fresh, challenging problems that test both physical strength and mental composure.",
    ],
  },
  {
    slug: "youth-program",
    title: "Youth Program",
    subtitle: "Climb, learn, grow",
    description: "Our youth climbing program builds confidence, strength, and problem-solving skills in a fun, supportive environment. Programs for ages 4–17, from beginners to competitive teams.",
    icon: faChild,
    image: "/images/services/youth-program.jpg",
    features: ["Ages 4–17", "Beginner to competitive", "USAC team", "After-school sessions"],
    details: [
      "Mini Climbers (ages 4–6): A playful introduction to climbing through games, basic movement, and fun challenges. 45-minute sessions with 4:1 climber-to-coach ratio.",
      "Junior Crushers (ages 7–12): Structured skills development across all disciplines — bouldering, top-rope, and lead fundamentals. Weekly sessions build toward our in-house competitions.",
      "SummitLine Team (ages 13–17): Our competitive team trains 3x/week and competes in USAC events across the region. Led by head coach and former national competitor Sarah Chen.",
    ],
  },
  {
    slug: "private-coaching",
    title: "Private Coaching",
    subtitle: "One-on-one breakthroughs",
    description: "Accelerate your climbing with personalized coaching from our certified instructors. Whether you're breaking into a new grade or fine-tuning technique, we'll get you there.",
    icon: faGraduationCap,
    image: "/images/services/private-coaching.jpg",
    features: ["Certified instructors", "Video analysis", "Custom training plans", "All disciplines covered"],
    details: [
      "Every private session starts with a 15-minute assessment: we watch you climb, identify your strengths and weaknesses, and build a session plan around your goals.",
      "Sessions include real-time video playback so you can SEE your movement patterns. Our coaches use Dartfish analysis software to break down technique frame by frame.",
      "After each session, you'll receive a written training plan with drills to practice on your own. Package deals available: 4-session and 8-session bundles save 15% and 25% respectively.",
    ],
  },
  {
    slug: "group-events",
    title: "Group Events & Parties",
    subtitle: "Climb together, celebrate bigger",
    description: "From birthday parties to corporate team-building, our group events combine climbing challenges with a memorable experience. We handle everything — you just show up and climb.",
    icon: faUsers,
    image: "/images/services/group-events.jpg",
    features: ["Birthday parties", "Corporate events", "Team building", "Private after-hours rental"],
    details: [
      "Birthday parties include 2 hours of climbing with dedicated instructors, a private party room, pizza and drinks, and a SummitLine t-shirt for the birthday climber. $399 for up to 10 climbers.",
      "Corporate team-building sessions combine climbing challenges with communication exercises designed to build trust and collaboration. Choose from half-day or full-day programs.",
      "Want the gym to yourself? Book a private after-hours rental (8–11 PM) with up to 50 guests. Includes all areas, music system, and staff. Perfect for launch parties or milestone celebrations.",
    ],
  },
  {
    slug: "membership",
    title: "Membership",
    subtitle: "Your home wall",
    description: "Join the SummitLine community with unlimited access, member-only events, gear discounts, and guest passes. Climb as much as you want, whenever you want.",
    icon: faCrown,
    image: "/images/services/membership.jpg",
    features: ["Unlimited climbing", "Member-only events", "15% gear discount", "4 guest passes/month"],
    details: [
      "All memberships include unlimited access during operating hours, free shoe and harness rental, and access to our fitness area with climbing-specific training equipment.",
      "Member perks include early access to new route sets, monthly member socials with free pizza and beer, and priority registration for clinics and workshops.",
      "We offer individual, couple, family, and student memberships. All come with a 7-day free trial — climb for a week before you commit.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "wall-installation",
    title: "Competition Wall Installation",
    description: "Our flagship 45-foot lead wall with 12 lanes, designed by Walltopia and built to IFSC competition specifications.",
    image: "/images/projects/wall-installation.jpg",
    category: "Facility",
  },
  {
    slug: "renovation",
    title: "Bouldering Cave Expansion",
    description: "Added 1,200 sq ft of steep terrain including a 60-degree roof, cave features, and a dedicated slab wall area.",
    image: "/images/projects/renovation.jpg",
    category: "Expansion",
  },
  {
    slug: "competition-wall",
    title: "Youth Training Zone",
    description: "Built a dedicated youth climbing area with adjustable-angle walls and age-appropriate route setting for ages 4–17.",
    image: "/images/projects/competition-wall.jpg",
    category: "Programs",
  },
  {
    slug: "kids-area",
    title: "Auto-Belay Installation",
    description: "Installed 8 state-of-the-art TruBlue auto-belay units across our top-rope area, enabling solo climbing sessions.",
    image: "/images/projects/kids-area.jpg",
    category: "Equipment",
  },
];

export const team: TeamMember[] = [
  {
    name: "Marcus Webb",
    role: "Founder & Head Coach",
    bio: "20+ years climbing experience. Former competitor on the IFSC World Cup circuit. AMGA certified.",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Youth Program Director",
    bio: "USAC National qualifier. Specializes in youth development and competitive climbing strategy.",
    image: "/images/team/team-2.jpg",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Alex R.",
    text: "SummitLine completely changed how I approach climbing. The coaching staff is incredible — they saw things in my technique I'd never noticed. Went from V3 to V5 in three months.",
    role: "Member since 2023",
  },
  {
    name: "The Parkers",
    text: "Our kids (8 and 11) absolutely love the youth program. Coach Sarah has been amazing with them. They've gained so much confidence — not just on the wall but everywhere.",
    role: "Family Membership",
  },
  {
    name: "James T.",
    text: "Best bouldering setting in Colorado, hands down. Problems are creative and challenging. The community here is super welcoming — I made friends on day one.",
    role: "Member since 2022",
  },
  {
    name: "Emily K.",
    text: "Hosted my daughter's 10th birthday here and it was flawless. The staff handled everything. Kids had a blast and parents got to relax. Already booking for next year.",
    role: "Event Client",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Day Pass",
    price: "$22",
    period: "/visit",
    description: "Perfect for drop-in climbers. Includes harness and shoe rental.",
    features: [
      "All-day access",
      "Harness included",
      "Shoe rental included",
      "Chalk provided",
    ],
  },
  {
    name: "Monthly",
    price: "$79",
    period: "/month",
    description: "Unlimited climbing for committed climbers. Best value.",
    features: [
      "Unlimited climbing",
      "Free gear rental",
      "4 guest passes/month",
      "15% pro shop discount",
      "Member-only events",
      "Fitness area access",
    ],
    highlighted: true,
  },
  {
    name: "10-Punch Pass",
    price: "$180",
    period: "/10 visits",
    description: "Save 18% vs day passes. No expiration date.",
    features: [
      "10 visits",
      "No expiration",
      "Harness + shoes included",
      "Transferable",
    ],
  },
  {
    name: "Annual",
    price: "$790",
    period: "/year",
    description: "Two months free vs monthly. For the dedicated climber.",
    features: [
      "Everything in Monthly",
      "2 months free",
      "Priority event registration",
      "Annual member gift",
      "Free belay classes",
    ],
  },
];

export const faqs = [
  {
    q: "Do I need experience to climb?",
    a: "Not at all! Most of our members started with zero experience. We offer a free 15-minute orientation for first-timers, and our staff is always on the floor to help. Just show up in comfortable athletic clothes.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable athletic wear (like you'd wear to the gym). We provide climbing shoes, harnesses, chalk, and everything else you need. A water bottle is recommended!",
  },
  {
    q: "How long does a session last?",
    a: "A day pass gives you all-day access — come and go as you please. Most climbers spend 1.5–2 hours on the wall per session. No time limits.",
  },
  {
    q: "Can I climb alone?",
    a: "Yes! Our bouldering area requires no partner, and we have 8 auto-belay stations on the top-rope walls for solo climbers. No belay experience needed for auto-belays.",
  },
  {
    q: "What ages do you serve?",
    a: "Our youth program starts at age 4. Kids under 14 must be accompanied by an adult. We have dedicated youth climbing areas and family-friendly hours on weekends.",
  },
  {
    q: "Do you offer refunds?",
    a: "Day passes are non-refundable. Memberships can be cancelled with 30 days notice. 10-punch passes never expire. If you're not satisfied after your first visit, talk to us — we'll make it right.",
  },
];
