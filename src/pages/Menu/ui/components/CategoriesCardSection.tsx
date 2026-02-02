import { categories, type ICategoryCard } from "@/entities/categories";
import { GlassCard } from "@/shared/ui/GlassCard";
import { CategoryCard } from "@/widgets/CategoryCard";
import { IconStack2Filled } from "@tabler/icons-react";

export default function CategoriesCardSection() {
  return (
    <GlassCard
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      className="col-span-3  lg:col-span-2"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
          <IconStack2Filled fill="white" size={42} />
        </div>
        <div>
          <h3 className="text-white text-2xl font-bold">Выберите категорию</h3>
          <p className="text-white/60 text-sm">Тема исторических событий</p>
        </div>
      </div>

      <div className="grid grid-flow-row auto-rows-max grid-cols-4 lg:grid-cols-3 gap-4">
        {categories.map((category: ICategoryCard) => (
          <CategoryCard key={category.key} category={category} />
        ))}
      </div>
    </GlassCard>
  );
}
