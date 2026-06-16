import { CategoryCard } from "@/components/category-card";
import { CATEGORIES } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      {CATEGORIES.map((cat, index) => (
        <CategoryCard key={cat.slug} category={cat} index={index} />
      ))}
    </div>
  );
}
