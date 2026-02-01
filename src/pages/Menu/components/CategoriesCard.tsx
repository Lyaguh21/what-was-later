import { categories, type CategoryType } from "@/entities/categories";
import { GlassCard } from "@/shared/ui/GlassCard";
import { IconStack2Filled } from "@tabler/icons-react";

export default function CategoriesCard() {
  return (
    <GlassCard className="col-span-2">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
          <IconStack2Filled fill="white" size={42} />
        </div>
        <div>
          <h3 className="text-white text-2xl font-bold">Выберите категорию</h3>
          <p className="text-white/60 text-sm">Тема исторических событий</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category: CategoryType) => (
          <button
            key={category.key}
            className="category-btn bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border-2 border-transparent hover:border-white/40 hover:scale-105"
          >
            <div className="*:size-13 *:stroke-white flex justify-center">
              {category.icon}
            </div>
            <div className="text-white font-bold text-lg">{category.name}</div>
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
