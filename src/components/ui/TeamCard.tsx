import Image from "next/image";
import { MapPin } from "lucide-react";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at AgroLite Company Inc.`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-display text-lg font-bold text-secondary heading-display">
          {member.name}
        </h3>
        <p className="text-primary font-semibold text-sm mt-1">{member.role}</p>
        {member.county && (
          <p className="flex items-center justify-center gap-1.5 text-muted text-xs mt-2">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            {member.county}
          </p>
        )}
      </div>
    </article>
  );
}
