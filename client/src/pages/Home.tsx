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
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-muted-foreground">
            Digital Creator & Content Maker
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-4 w-full max-w-lg px-4">
          <style>
            {`
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
            `}
          </style>
          <SocialButton
            icon={SiInstagram}
            label="Instagram"
            href="https://instagram.com/yourusername"
            hoverClass="instagram-hover"
          />
          <SocialButton
            icon={SiYoutube}
            label="YouTube"
            href="https://youtube.com/@yourusername"
            hoverClass="youtube-hover"
          />
          <SocialButton
            icon={SiTiktok}
            label="TikTok"
            href="https://tiktok.com/@yourusername"
            hoverClass="tiktok-hover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}