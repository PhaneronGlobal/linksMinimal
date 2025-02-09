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
            kaci bedi
          </h1>
          <p className="text-muted-foreground">
            where curiosity for knowledge meets the pursuit of a better life :)
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <style jsx global>{`
            .instagram-hover:hover {
              background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
              border-color: transparent;
              color: white;
            }
            .youtube-hover:hover {
              background: #FF0000;
              border-color: #FF0000;
              color: white;
            }
            .tiktok-hover:hover {
              background: black;
              border-color: black;
              color: white;
            }
          `}</style>
          <SocialButton
            icon={SiInstagram}
            label="Instagram"
            href="https://instagram.com/kaciibedii"
            hoverClass="instagram-hover"
          />
          <SocialButton
            icon={SiYoutube}
            label="YouTube"
            href="https://youtube.com/@ytkaci"
            hoverClass="youtube-hover"
          />
          <SocialButton
            icon={SiTiktok}
            label="TikTok"
            href="https://tiktok.com/@kacibedi"
            hoverClass="tiktok-hover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}