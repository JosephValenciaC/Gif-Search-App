import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setcategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <h1>Buscador de Gifs </h1>

      <AddCategory
        onNewCategory={onAddCategory}
        currentCategories={categories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
