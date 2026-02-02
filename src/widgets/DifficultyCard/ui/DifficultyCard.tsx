import type { IDifficultyCard } from "@/entities/difficulties";
import { selectDifficulty, setDifficulty } from "@/entities/view";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import cn from "classnames";

export default function DifficultyCard({
  difficulty,
}: {
  difficulty: IDifficultyCard;
}) {
  const dispatch = useAppDispatch();
  const selectedDifficulty = useAppSelector(selectDifficulty);

  return (
    <button
      className={cn(
        "w-full grow items-center rounded-2xl p-2 transition-all duration-300 border-2 border-transparent hover:border-white/40 hover:scale-105 flex justify-between ",
        difficulty.colorCard,
        {
          [`border-2 border-white/60 scale-[104%] md:scale-110 shadow-xl ${difficulty.colorShadow}`]:
            selectedDifficulty === difficulty.key,
        },
      )}
      onClick={() => dispatch(setDifficulty(difficulty.key))}
    >
      <div className="flex gap-3 items-center">
        <div className="*:size-10 *:stroke-white">{difficulty.icon}</div>
        <div className="text-white font-bold text-2xl">{difficulty.name}</div>
      </div>

      <div className="bg-white/20 rounded-lg py-1 px-1 text-white/90 text-xs font-medium w-19">
        {difficulty.tag}
      </div>
    </button>
  );
}
