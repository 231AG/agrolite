import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-wide mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Image
              src="/agro-lite-logo-transparent.png"
              alt={COMPANY.name}
              width={612}
              height={408}
              className="h-14 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Empowering Liberian farmers with quality agricultural products,
              hybrid seedlings, and sustainable farming solutions since 2017.
            </p>
            <p className="text-accent font-semibold text-sm italic">
              {COMPANY.footerTagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-secondary mb-4 heading-display">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-secondary mb-4 heading-display">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{COMPANY.address.full}</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{COMPANY.phones.join(" | ")}</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-secondary mb-4 heading-display">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="px-4 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-accent hover:text-primary-dark transition-colors"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
