import { data } from "./recipes";

// export async function seedRecipes() {
//   const recipes = await fetch("https://restapi.fr/api/momories");

//   if (recipes.length < 10) {
//     const response = await fetch("https://restapi.fr/api/memories", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       console.log("welcom");
//     }
//   }
// }
export async function seedRecipes() {
  const response = await fetch("https://restapi.fr/api/aitianrecipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error create recipe");
  }}

