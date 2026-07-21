import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "See SummitLine's facility expansions, wall installations, equipment upgrades, and program developments.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
