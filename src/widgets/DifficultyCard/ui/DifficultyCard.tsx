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
        "grow items-center rounded-2xl p-2 transition-all duration-300 border-2 border-transparent hover:border-white/40 hover:scale-105 flex justify-between ",
        difficulty.colorCard,
        {
          "border-2 border-white/60 scale-110":
            selectedDifficulty === difficulty.key,
        },
      )}
      onClick={() => dispatch(setDifficulty(difficulty.key))}
    >
      <div className="flex gap-3 items-center">
        <div className="*:size-10 *:stroke-white">{difficulty.icon}</div>
        <div className="text-white font-bold text-2xl">{difficulty.name}</div>
      </div>

      <div className="bg-white/20 rounded-lg py-1 px-2 text-white/90 text-xs font-medium w-20">
        {difficulty.tag}
      </div>
    </button>
  );
}
