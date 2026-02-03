import { selectGameScore, selectGameStreak } from "@/entities/game";
import { useAppSelector } from "@/shared/lib";
import { GlassMiniCard } from "@/shared/ui/GlassMiniCard";
import { IconFlameFilled, IconStarFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Header() {
  const score = useAppSelector(selectGameScore);
  const streak = useAppSelector(selectGameStreak);
  return (
    <div id="header" className="mb-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-5xl font-bold text-white mb-4"
      >
        Что было позже?
      </motion.h1>
      
      <div className="flex items-center justify-center gap-8">
        <GlassMiniCard
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <IconStarFilled fill="#FACC15" size={32} />
          <span className="text-white text-3xl font-bold" id="score">
            {score}
          </span>
          <span className="text-white/80 text-lg">очков</span>
        </GlassMiniCard>
        <GlassMiniCard
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <IconFlameFilled fill="#FB923C" size={32} />
          <span className="text-white text-3xl font-bold" id="streak">
            {streak}
          </span>
          <span className="text-white/80 text-lg">подряд</span>
        </GlassMiniCard>
      </div>
    </div>
  );
}
