import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4 text-center">
        <FontAwesomeIcon icon={faMountain} className="size-20 text-slate-200 mb-4" />
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Route Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Looks like this route isn&apos;t on our wall. Let&apos;s get you back to the gym.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex">
            <Button>Back Home</Button>
          </Link>
          <Link href="/services" className="inline-flex">
            <Button variant="outline">View Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
