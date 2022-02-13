// # React
import React, { useState, useEffect } from "react";

// # MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

// # COMPONENTS
import Meals from "./components/Meal/Meals";
import Preloader from "./components/Preloader/Preloader";

// # CSS
import "./App.css";
import "./components/Carousel/Carousel.css";

function App() {
  const [meals, setMeals] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  // #
  const [categories, setCategories] = useState("");

  // #Drop Down Fetch
  const [categoriesList, setCategoriesList] = useState([]);

  // # preloader
  const [preloader, setPreloader] = useState(true);

  // #handles
  const searchHandle = (event) => {
    event.preventDefault();
    setPreloader(true);
    setCategories(searchInput);
    setSearchInput("");
  };

  const handleCategoriesChange = (event) => {
    setPreloader(true);
    setCategories(event.target.value);
  };

  // Get MEALS
  useEffect(() => {
    const getMeals = fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${categories}`
    );
    getMeals
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
        setPreloader(false);
      });
  }, [categories]);

  // Get Categories
  useEffect(() => {
    const getCategories = fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    getCategories
      .then((res) => res.json())
      .then((data) => {
        setCategoriesList(data.categories);
      });
  }, []);

  return (
    <div className="app">
      <div className="app__nav flex h-16 w-full items-center  justify-center">
        <div className="bg-gray-100 rounded-md">
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categories}
                label="Categories"
                onChange={handleCategoriesChange}
              >
                {categoriesList.map(({ strCategory }) => (
                  <MenuItem key={strCategory} value={strCategory}>
                    {strCategory}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="SEARCH_CON">
          <form
            onSubmit={searchHandle}
            className="flex h-10 rounded-md items-center justify-center flex-row bg-white"
          >
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="text-lg border-none px-2 outline-none"
            />
            <Button type="submit" variant="outlined">
              <SearchIcon />
            </Button>
          </form>
        </div>
      </div>
      {preloader ? (
        <Preloader />
      ) : (
        <div className="app__meal flex w-full flex-wrap justify-center">
          {meals.map((meal) => {
            const ingredients = [];

            for (let i = 0; i <= 20; i++) {
              if (meal["strIngredient" + i]) {
                ingredients.push(
                  `${meal["strIngredient" + i]} - ${meal["strMeasure" + i]}`
                );
              }
            }
            return (
              <Meals key={meal.idMeal} ingredients={ingredients} {...meal} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
