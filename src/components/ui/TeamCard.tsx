import Image from "next/image";
import { CheckCircle } from "lucide-react";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  featured?: boolean;
}

export function TeamCard({ member, featured = false }: TeamCardProps) {
  return (
    <article
      className={`bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-secondary heading-display">
          {member.name}
        </h3>
        <p className="text-primary font-semibold text-sm mt-1 mb-3">
          {member.role}
        </p>
        <p className="text-muted text-sm leading-relaxed mb-4">{member.bio}</p>
        {member.highlights && (
          <ul className="space-y-2">
            {member.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
