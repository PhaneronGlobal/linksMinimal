import { SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import { SocialButton } from "@/components/ui/social-button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-muted-foreground">
            Digital Creator & Content Maker
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <SocialButton
            icon={SiInstagram}
            label="Instagram"
            href="https://instagram.com/yourusername"
          />
          <SocialButton
            icon={SiYoutube}
            label="YouTube"
            href="https://youtube.com/@yourusername"
          />
          <SocialButton
            icon={SiTiktok}
            label="TikTok"
            href="https://tiktok.com/@yourusername"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
