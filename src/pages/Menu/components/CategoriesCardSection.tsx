import { categories, type ICategoryCard } from "@/entities/categories";
import { GlassCard } from "@/shared/ui/GlassCard";
import { CategoryCard } from "@/widgets/CategoryCard";
import { IconStack2Filled } from "@tabler/icons-react";

export default function CategoriesCardSection() {
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
        {categories.map((category: ICategoryCard) => (
          <CategoryCard key={category.key} category={category} />
        ))}
      </div>
    </GlassCard>
  );
}
