import GameEventCard from "@/widgets/GameEventCard/ui/GameEventCard";
import { allHistoryEvents } from "@/entities/game";
import { GlassMiniCard } from "@/shared/ui/GlassMiniCard";

export default function GameEventCardSection() {
  return (
    <div className="flex justify-center items-center w-full gap-12">
      <GameEventCard
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        event={allHistoryEvents[9]}
      />

      <GlassMiniCard className="aspect-square ">
        <span className="text-white text-3xl font-bold">VS</span>
      </GlassMiniCard>

      <GameEventCard
        initial={{ x: 200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut", delay: 0 },
        }}
        event={allHistoryEvents[5]}
      />
    </div>
  );
}
