import { categories } from "./CategoryData";
import CategoryList from "./CategoryList";

export default function CategoryItem() {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold">Categories</h1>
      <CategoryList categories={categories} />
    </div>
  );
}
