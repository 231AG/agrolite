import Link from "next/link";
import { MessageCircle, Mail, Tag } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface InquiryActionsProps {
  subject: string;
}

export function InquiryActions({ subject }: InquiryActionsProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello AgroLite, I would like to inquire about: ${subject}`
  );
  const whatsappUrl = `https://wa.me/231${COMPANY.whatsapp.replace(/^0/, "")}?text=${whatsappMessage}`;
  const infoSubject = encodeURIComponent(`Information Request: ${subject}`);
  const pricingSubject = encodeURIComponent(`Pricing Request: ${subject}`);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
      <Link
        href={`/contact?subject=${infoSubject}`}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
      >
        <Mail className="w-4 h-4" />
        Request Information
      </Link>
      <Link
        href={`/contact?subject=${pricingSubject}`}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-accent-light transition-colors"
      >
        <Tag className="w-4 h-4" />
        Get Pricing
      </Link>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        <MessageCircle className="w-4 h-4" />
        Contact AgroLite
      </a>
    </div>
  );
}
