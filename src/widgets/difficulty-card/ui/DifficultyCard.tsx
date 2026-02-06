import {
  selectDifficulty,
  setDifficulty,
  type IDifficultyCard,
} from "@/entities/settings";
import { setVisibleDifficultyModal } from "@/entities/view";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { IconInfoCircle } from "@tabler/icons-react";
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

      <button
        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
        title="Информация о сложности"
        onClick={() => dispatch(setVisibleDifficultyModal(true))}
      >
        <IconInfoCircle size={32} color="white" />
      </button>
    </button>
  );
}
