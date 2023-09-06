import IconArrowDown from "@/public/Nordcom-Icons/IconArrowDown";
import IconArrowUp from "@/public/Nordcom-Icons/IconArrowUp";
import { useState } from "react";

const CategoryList = ({ categories }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <div
            className={`${
              openCategory === index ? "border border-primary-19" : "bg-white"
            } p-2 rounded flex items-start justify-between cursor-pointer w-68 h-10 px-4 gap-44 flex-shrink-0`}
            onClick={() => toggleCategory(index)}
          >
            {category.name}
            {category.subcategories.length > 0 && (
              <span className="ml-2 cursor-pointer">
                {openCategory === index ? <IconArrowUp /> : <IconArrowDown />}
              </span>
            )}
          </div>
          {openCategory === index && (
            <ul className="pl-2 cursor-pointer">
              <CategoryList categories={category.subcategories} />
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default CategoryList;
