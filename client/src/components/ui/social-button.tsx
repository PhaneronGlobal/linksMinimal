
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  icon: IconType;
  label: string;
  href: string;
  hoverClass?: string;
}

export function SocialButton({ icon: Icon, label, href, hoverClass }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-3 px-6 py-4 w-full rounded-xl border border-gray-200/30 bg-white/5 backdrop-blur-sm transition-all duration-300",
        "hover:scale-105",
        hoverClass
      )}
    >
      <Icon className="w-6 h-6" />
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
}
