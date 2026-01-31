import { gameMods, type gameModType } from "@/entities/gameMods";
import { GlassCard } from "@/shared/ui/GlassCard";
import { IconDeviceGamepad2 } from "@tabler/icons-react";
import cn from "classnames";

export default function GameModCard() {
  return (
    <GlassCard className="col-span-3">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
          <IconDeviceGamepad2 color="white" size={42} />
        </div>
        <div>
          <h3 className="text-white text-2xl font-bold">Режим игры</h3>
          <p className="text-white/60 text-sm">Выберите способ игры</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {gameMods.map((mod: gameModType) => (
          <button
            className={cn(
              "mode-btn bg-linear-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-2xl p-8 transition-all duration-300 hover:scale-105 shadow-xl",
              mod.colorCard,
            )}
          >
            <div className="flex justify-center *:-color-white *:size-18">
              {mod.icon}
            </div>

            <div className="text-white font-bold text-xl mb-2">{mod.name}</div>
            <div className="text-white/80 text-sm leading-relaxed">
              {mod.description}
            </div>
            <div className="mt-4 bg-white/20 rounded-lg py-2 px-4 text-white/90 text-xs font-medium flex justify-center gap-1 items-center">
              <div className="*:size-4">{mod.tagIcon}</div>
              <p>{mod.tag}</p>
            </div>
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
