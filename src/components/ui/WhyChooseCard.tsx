"use client";

import {
  Leaf,
  GraduationCap,
  Recycle,
  HeadphonesIcon,
  Users,
  Award,
} from "lucide-react";

const iconMap = {
  leaf: Leaf,
  expertise: GraduationCap,
  sustainability: Recycle,
  service: HeadphonesIcon,
  community: Users,
  commitment: Award,
} as const;

interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export function WhyChooseCard({ title, description, icon }: WhyChooseCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="group p-6 md:p-8 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-accent transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-display text-xl font-bold text-secondary mb-3 heading-display">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
