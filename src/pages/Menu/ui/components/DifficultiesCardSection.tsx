import { GlassCard } from "@/shared/ui/glass-card";
import { IconBrandSpeedtest } from "@tabler/icons-react";
import { difficulties, type IDifficultyCard } from "@/entities/settings";
import { DifficultyCard } from "@/widgets/difficulty-card";

export default function DifficultiesCardSection() {
  return (
    <GlassCard
      initial={{ x: 200, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { delay: 0.9, ease: "easeOut", duration: 0.5 },
      }}
      exit={{
        x: 200,
        opacity: 0,
        transition: { delay: 0, ease: "easeOut", duration: 0.5 },
      }}
      className="col-span-3 lg:col-span-1 flex flex-col grow"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-linear-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center">
          <IconBrandSpeedtest size={42} color="white" />
        </div>
        <div>
          <h3 className="text-white text-2xl font-bold">Уровень сложности</h3>
          <p className="text-white/60 text-sm">Выберите сложность</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 grow">
        {difficulties.map((difficulty: IDifficultyCard) => (
          <DifficultyCard difficulty={difficulty} key={difficulty.key} />
        ))}
      </div>
    </GlassCard>
  );
}
