import React from "react";

function Carousel({ strCategoryThumb }) {
  return (
    <div className="carousel__img-container">
      <img className="" src={strCategoryThumb} alt={strCategoryThumb} />
    </div>
  );
}

export default Carousel;
