import { recipes } from "./TaskList.js";

export default function RecipeList() {
  //
  const mapValue = recipes.map((item) => {
    //
    let emptyArray = [];
    const ingredientsMap = item.ingredients.forEach((oneIng) => (
      // console.log(oneIng)
      <li key={oneIng}>{oneIng}</li>
    ));

    // console.log(ingredientsMap);

    //
    return (
      <div>
        {item.name}
        {ingredientsMap}
      </div>
    );
  });
  //
  return (
    <div>
      <h1>Recipes</h1>
      {mapValue}
    </div>
  );
}
