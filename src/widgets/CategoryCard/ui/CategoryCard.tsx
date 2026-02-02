import type { ICategoryCard } from "@/entities/categories";
import { selectCategory, setCategory } from "@/entities/view";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import cn from "classnames";

export default function CategoryCard({
  category,
}: {
  category: ICategoryCard;
}) {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(selectCategory);

  return (
    <button
      className={cn(
        "category-btn bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border-2 border-transparent hover:border-white/40 hover:scale-105",
        {
          "scale-110 border-white/50": selectedCategory === category.key,
        },
      )}
      onClick={() => dispatch(setCategory(category.key))}
    >
      <div className="*:size-13 *:stroke-white flex justify-center">
        {category.icon}
      </div>
      <div className="text-white font-bold text-lg">{category.name}</div>
    </button>
  );
}
