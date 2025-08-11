import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, children, className }) => {
  return (
    <div
      className={cn(
        "bg-gray-800/25 backdrop-blur-md backdrop-saturate-150 border border-white/15 rounded-xl shadow-md p-5 h-full flex flex-col",
        className
      )}
    >
      <div className="h-11 flex items-center gap-2 text-foreground text-base md:text-[17px] font-semibold tracking-tight border-b border-border/60 mb-3">
        {typeof title === "string" ? <h3 className="leading-none text-white">{title}</h3> : title}
      </div>
      <div className="pt-2 text-white [&_*]:!text-white">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
