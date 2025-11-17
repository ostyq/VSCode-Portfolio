import { ReactNode } from "react";

export function Badge({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#2d2d2d] text-[#cccccc] 
      border border-[#3e3e3e] mr-2 mb-2 
      transition-all duration-200 hover:bg-[#3d3d3d] hover:border-[#4e4e4e] hover:text-white hover:scale-105 cursor-default ${className}`}>
      {children}
    </span>
  );
} 
