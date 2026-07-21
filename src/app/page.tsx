import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Scale New Heights at SummitLine Climbing Gym",
  description: "Colorado's premier indoor climbing gym. Bouldering, top-rope, lead climbing, youth programs, and private coaching for all levels.",
};

export default function HomePage() {
  return <HomeClient />;
}
