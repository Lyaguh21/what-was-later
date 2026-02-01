import { gameMods, type gameModType } from "@/entities/gameMods";
import { GlassCard } from "@/shared/ui/GlassCard";
import { IconDeviceGamepad2, IconLock } from "@tabler/icons-react";
import cn from "classnames";

export default function GameModsCard() {
  return (
    <GlassCard className="col-span-2">
      <div className="flex items-center gap-4 mb-4">
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
          <div key={mod.name} className="relative">
            <button
              disabled={mod.soon}
              className={cn(
                "h-full flex flex-col justify-between mode-btn bg-linear-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-2xl p-8 transition-all duration-300 hover:scale-105  shadow-xl ",
                mod.colorCard,
                {
                  "bg-gray-400 from-gray-400 to-gray-400 hover:scale-none cursor-not-allowed opacity-80":
                    mod.soon,
                },
              )}
            >
              <div className="flex justify-center *:-color-white *:size-18">
                {mod.icon}
              </div>

              <div className="text-white font-bold text-xl mb-2">
                {mod.name}
              </div>
              <div className="text-white/80 text-sm leading-relaxed">
                {mod.description}
              </div>
              <div className="mt-4 bg-white/20 rounded-lg py-2 px-4 text-white/90 text-xs font-medium flex justify-center gap-1 items-center">
                <div className="*:size-4">{mod.tagIcon}</div>
                <p>{mod.tag}</p>
              </div>
            </button>

            {mod.soon && (
              <div className="transition-all duration-300 hover:scale-105 shadow-xl absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 rounded-2xl text-white font-semibold pointer-events-none">
                <IconLock size={32} />
                <span>Скоро</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
