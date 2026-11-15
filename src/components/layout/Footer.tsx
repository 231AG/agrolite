import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-red text-white">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.4fr_auto] gap-10 lg:gap-12">
          <div>
            <Image
              src="/agro-lite-logo-white.png"
              alt={`${COMPANY.name} logo`}
              width={576}
              height={185}
              className="h-14 w-auto mb-5"
            />
            <p className="text-white/85 text-sm leading-relaxed max-w-xs">
              Quality seedlings, farm inputs, soil testing, and practical support for
              Liberian farmers since {COMPANY.founded}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2.5 text-white/85">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {COMPANY.phones.map((phone, index) => (
                    <span key={phone}>
                      <a href={`tel:+231${phone.replace(/^0/, "")}`} className="hover:text-white hover:underline">
                        {phone}
                      </a>
                      {index < COMPANY.phones.length - 1 && " | "}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-white/85">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white hover:underline">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/85">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>{COMPANY.address.full}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Follow Us</h3>
            <ul className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1.5 border border-white/60 rounded text-sm text-white/90 hover:bg-white hover:text-brand-red transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between gap-2 text-sm text-white/75">
          <p>
            &copy; {currentYear} {COMPANY.name} All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://www.corexlr.com"
              target="_blank"
              rel="noopener"
              className="font-semibold text-white hover:underline"
            >
              Corex Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
