import React from "react";

function Category({ strCategory, strCategoryThumb }) {
  return (
    <div className="app__category m-3 h-44 w-80 rounded-lg border-2 border-yellow-400">
      <div>
        <img
          className="app__category-img w-12"
          src={strCategoryThumb}
          alt={strCategory}
        />
      </div>
      <p></p>
    </div>
  );
}

export default Category;
