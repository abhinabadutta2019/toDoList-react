import { recipes } from "./TaskList.js";

export default function RecipeList() {
  //

  //
  return (
    <div>
      <h1>Recipes</h1>

      <div>
        {recipes.map((oneItem) => {
          return (
            <div key={oneItem.id}>
              {oneItem.name}
              {oneItem.ingredients.map((ing) => {
                return <li key={ing}>{ing}</li>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
