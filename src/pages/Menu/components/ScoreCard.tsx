import { GlassCard } from "@/shared/ui/GlassCard";
import { IconTrophyFilled } from "@tabler/icons-react";

export default function ScoreCard() {
  return (
    <GlassCard className="col-span-1">
      <div className="flex justify-between gap-4 mb-12">
        <div className="p-2 flex items-center justify-center w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl ">
          <IconTrophyFilled fill="white" size={42} />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-white text-3xl font-bold">Личный рекорд</h3>
          <p className="text-white/60 text-md">Ваш лучший результат</p>
        </div>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <div className="text-white/70 text-sm font-medium mb-2">
          Максимальный счет
        </div>
        <div className="text-white text-6xl font-black mb-4" id="personal-best">
          42
        </div>
        <div className="flex justify-center gap-6 text-white/80">
          <div>
            <div className="text-3xl font-bold">15</div>
            <div className="text-xs">Лучшая серия</div>
          </div>
          <div className="w-px bg-white/20"></div>
          <div>
            <div className="text-3xl font-bold">127</div>
            <div className="text-xs">Всего игр</div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
