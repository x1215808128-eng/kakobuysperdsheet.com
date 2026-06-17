import { CategoryCard } from "@/components/category-card";
import { CATEGORIES } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
      {CATEGORIES.map((cat, index) => (
        <CategoryCard key={cat.slug} category={cat} index={index} />
      ))}
    </div>
  );
}
