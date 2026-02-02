import type { IGameModeCard } from "@/entities/gameMods";
import { selectGameMode, setGameMode } from "@/entities/view";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { IconLock } from "@tabler/icons-react";
import cn from "classnames";

export default function CategoryCard({ mod }: { mod: IGameModeCard }) {
  const dispatch = useAppDispatch();
  const selectedGameMode = useAppSelector(selectGameMode);

  return (
    <div className="relative">
      <button
        disabled={mod.soon}
        className={cn(
          "h-full w-full flex flex-row gap-1 md:gap-2.5 items-center md:flex-col justify-between mode-btn bg-linear-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-2xl p-2 sm:p-4 md:py-8 md:px-4 transition-all duration-300 hover:scale-105  shadow-xl border-2 border-white/20",
          mod.colorCard,
          {
            "bg-gray-400 from-gray-400 to-gray-400 hover:scale-none cursor-not-allowed opacity-80":
              mod.soon,
            [`scale-[104%] border-2 border-white/50 shadow-xl ${mod.colorShadow}`]:
              selectedGameMode === mod.key,
          },
        )}
        onClick={() => dispatch(setGameMode(mod.key))}
      >
        <div className="flex flex-col md:justify-between grow md:items-center">
          <div className="flex justify-between items-center gap-2 ">
            <div className="flex flex-row md:flex-col md:justify-center items-center gap-0.5 sm:gap-2">
              <div className="flex justify-center *:-color-white *:size-8 md:*:size-18">
                {mod.icon}
              </div>
              <div className="text-white font-bold text-2xl leading-7.5 self-start">
                {mod.name}
              </div>
            </div>
            {/* //?Виден на мобилке и планшете */}
            <div className="md:hidden shrink-0 md:mt-4 bg-white/20 rounded-lg py-2 px-4 text-white/90 text-xs font-medium flex justify-center gap-1 items-center">
              <div className="*:size-4 blck">{mod.tagIcon}</div>
              <p className="block max-[385px]:hidden">{mod.tag}</p>
            </div>
          </div>

          <div className="text-white/80 text-sm leading-relaxed text-start md:text-center ml-2 md:ml-0">
            {mod.description}
          </div>
        </div>
        {/* //? Виден только на десктопе */}
        <div className="hidden md:flex shrink-0  bg-white/20 rounded-lg py-2 px-4 text-white/90 text-xs font-medium  justify-center gap-1 items-center">
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
  );
}
