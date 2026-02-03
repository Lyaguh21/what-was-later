import { gameMods, type IGameModeCard } from "@/entities/settings";
import { GlassCard } from "@/shared/ui/GlassCard";
import { GameModeCard } from "@/widgets/GameModeCard";
import { IconDeviceGamepad2 } from "@tabler/icons-react";

function GameModsCardSection() {
  return (
    <GlassCard
      initial={{ x: -200, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { delay: 0.6, ease: "easeOut", duration: 0.5 },
      }}
      exit={{
        x: -200,
        opacity: 0,
        transition: { delay: 0.3, ease: "easeOut", duration: 0.5 },
      }}
      className="col-span-3 lg:col-span-2"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
          <IconDeviceGamepad2 color="white" size={42} />
        </div>
        <div>
          <h3 className="text-white text-2xl font-bold">Режим игры</h3>
          <p className="text-white/60 text-sm">Выберите способ игры</p>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-4">
        {gameMods.map((mod: IGameModeCard) => (
          <GameModeCard mod={mod} key={mod.key} />
        ))}
      </div>
    </GlassCard>
  );
}

export default GameModsCardSection;
