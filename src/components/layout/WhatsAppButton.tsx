"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/231${COMPANY.whatsapp.replace(/^0/, "")}?text=${encodeURIComponent("Hello AgroLite, I would like to inquire about your products and services.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}
