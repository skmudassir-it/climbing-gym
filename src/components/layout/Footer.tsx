import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon icon={faMountain} className="size-6 text-primary" />
              <span className="text-lg font-extrabold text-white">SUMMITLINE</span>
            </div>
            <p className="text-sm text-slate-400">
              Colorado&apos;s premier indoor climbing experience. Routes for every level, community for every climber.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services/bouldering" className="hover:text-white transition-colors">Bouldering</Link>
              <Link href="/services/top-rope" className="hover:text-white transition-colors">Top-Rope</Link>
              <Link href="/services/youth-program" className="hover:text-white transition-colors">Youth Program</Link>
              <Link href="/services/private-coaching" className="hover:text-white transition-colors">Private Coaching</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
            <div className="text-sm text-slate-400 space-y-1">
              <p>8500 Climb Way</p>
              <p>Boulder, CO 80301</p>
              <p className="mt-2">climb@summitline.com</p>
              <p>(303) 555-0147</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} SummitLine Climbing Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
