
import React from "react";
import { cn } from "@/lib/utils";

interface TopicHeroProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const TopicHero: React.FC<TopicHeroProps> = ({ 
  title, 
  description,
  icon,
  className 
}) => {
  return (
    <div className={cn("bg-gradient-to-r from-pmblue to-pmblue-light text-white p-8 md:p-12 rounded-lg", className)}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm">
          {icon}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default TopicHero;
