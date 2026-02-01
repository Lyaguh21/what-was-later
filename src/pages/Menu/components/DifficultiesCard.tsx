import { GlassCard } from "@/shared/ui/GlassCard";
import { IconBrandSpeedtest } from "@tabler/icons-react";
import { difficulties, type difficultyType } from "@/entities/difficulties";
import cn from "classnames";

export default function DifficultiesCard() {
  return (
    <GlassCard className="col-span-1 flex flex-col grow">
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
        {difficulties.map((difficulty: difficultyType) => (
          <button
            key={difficulty.key}
            className={cn(
              "grow items-center rounded-2xl p-2 transition-all duration-300 border-2 border-transparent hover:border-white/40 hover:scale-105 flex justify-between ",
              difficulty.colorCard,
            )}
          >
            <div className="flex gap-3 items-center">
              <div className="*:size-10 *:stroke-white">{difficulty.icon}</div>
              <div className="text-white font-bold text-2xl">
                {difficulty.name}
              </div>
            </div>

            <div className="bg-white/20 rounded-lg py-1 px-2 text-white/90 text-xs font-medium w-[80px]">
              {difficulty.tag}
            </div>
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
