import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { type IconType } from "react-icons";

interface SocialButtonProps {
  icon: IconType;
  label: string;
  href: string;
  hoverClass: string;
}

export function SocialButton({ icon: Icon, label, href, hoverClass }: SocialButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full"
    >
      <Button
        asChild
        variant="outline"
        size="lg"
        className={`w-full bg-gradient-to-r from-background to-muted border-2 transition-all duration-300 group ${hoverClass}`}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3"
        >
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="font-medium">{label}</span>
        </a>
      </Button>
    </motion.div>
  );
}