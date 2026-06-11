import { useState } from "react";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  // Add Recipe
  const addRecipe = (e) => {
    e.preventDefault();

    if (!name || !ingredients) {
      alert("Please fill all fields");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      name,
      ingredients,
    };

    setRecipes([...recipes, newRecipe]);
    setName("");
    setIngredients("");
  };

  // Delete Recipe
  const deleteRecipe = (id) => {
    const updated = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🍲 Recipe Book</h1>

      {/* Add Recipe Form */}
      <form onSubmit={addRecipe}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Recipe</button>
      </form>

      <hr />

      {/* Display Recipes */}
      <h2>All Recipes</h2>

      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>

            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
