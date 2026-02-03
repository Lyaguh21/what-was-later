import GlassMiniCard from "@/shared/ui/GlassMiniCard/GlassMiniCard";
import { IconFlameFilled, IconStarFilled } from "@tabler/icons-react";

export default function Header() {
  return (
    <div id="header" className="mb-8 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Что было позже?</h1>
      <div className="flex items-center justify-center gap-8">
        <GlassMiniCard
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <IconStarFilled fill="#FACC15" size={32} />
          <span className="text-white text-3xl font-bold" id="score">
            1
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
            1
          </span>
          <span className="text-white/80 text-lg">подряд</span>
        </GlassMiniCard>
      </div>
    </div>
  );
}
