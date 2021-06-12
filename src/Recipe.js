import React from "react";
import "./Recipe.css";
const Recipe = ({ title, calories, source, ingredients }) => {
  return (
    <div className="recipe">
      <div className="info">
        <h1>{title}</h1>
        <p>Calories Contains:{calories.toFixed(2)}</p>
        Recipes: <br />
        -----------
        {ingredients.map((ing) => (
          <ul className="ingredients">
            <li>{ing.text}</li>
          </ul>
        ))}
      </div>
      <div className="picture">
        <img className="pic" src={source} alt="items" />
      </div>
    </div>
  );
};

export default Recipe;
