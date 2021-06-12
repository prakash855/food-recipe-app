import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./styles.css";

export default function App() {
  const APP_ID = "83c1c43e";
  const APP_KEY = "3f753cf03185d3cf509bb4f52c8cebbb";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((response) => setRecipes(response.hits));
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((item, index) => (
        <Recipe
          key={index}
          title={item.recipe.label}
          calories={item.recipe.calories}
          source={item.recipe.image}
          ingredients={item.recipe.ingredients}
        />
      ))}
    </div>
  );
}
