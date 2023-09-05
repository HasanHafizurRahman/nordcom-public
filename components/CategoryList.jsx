import IconArrowDown from "@/public/Nordcom-Icons/IconArrowDown";
import IconArrowUp from "@/public/Nordcom-Icons/IconArrowUp";
import React, { useState } from "react";

const CategoryList = ({ data }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [selectedGrandchild, setSelectedGrandchild] = useState(null);

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(
        expandedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const handleCategoryClick = (grandchildId) => {
    setSelectedGrandchild(grandchildId);
  };

  const isCategoryExpanded = (categoryId) =>
    expandedCategories.includes(categoryId);

  const renderCategory = (category) => (
    <div
      key={category.id}
      className="p-2.5 w-[15.875rem] h-[2.5rem] flex items-center justify-between"
    >
      {category.name}
      {category.children && category.children.length > 0 && (
        <div onClick={() => toggleCategory(category.id)}>
          {isCategoryExpanded(category.id) ? (
            <IconArrowUp />
          ) : (
            <IconArrowDown />
          )}
        </div>
      )}
    </div>
  );

  const renderGrandchildCategory = (grandchild) => (
    <div
      key={grandchild.id}
      className={`${
        grandchild.id === selectedGrandchild ? "bg-primary-19 text-white" : ""
      } p-2.5 w-[15.875rem] h-[2.5rem] flex items-center justify-between`}
      onClick={() => handleCategoryClick(grandchild.id)}
    >
      {grandchild.name}
    </div>
  );

  const renderSubcategory = (subcategory) => (
    <div key={subcategory.id}>
      {renderCategory(subcategory)}
      {isCategoryExpanded(subcategory.id) && (
        <div className="pl-8">
          {subcategory.children.map((grandchild) =>
            renderGrandchildCategory(grandchild)
          )}
        </div>
      )}
    </div>
  );

  const renderCategories = (categories) => (
    <div className="flex flex-col gap-8">
      <h3>Category</h3>
      {categories.map((category) => (
        <div key={category.id}>
          {renderCategory(category)}
          {category.children &&
            category.children.map((subcategory) =>
              renderSubcategory(subcategory)
            )}
        </div>
      ))}
    </div>
  );

  return <div>{renderCategories(data)}</div>;
};

export default CategoryList;
