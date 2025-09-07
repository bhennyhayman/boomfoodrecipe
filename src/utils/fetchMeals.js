import axios from "axios"

async function getUniqueRandomMeals(count, setDishes) {
  const ids = new Set();
  const results = [];
  const maxAttempts = count * 8; // safety limit

  while (results.length < count && ids.size < maxAttempts) {
    try {
      const res = await axios.get(import.meta.env.VITE_MEALS_API);
      const meal = res.data?.meals?.[0];
      if (!meal) continue;

      if (!ids.has(meal.idMeal)) {
        ids.add(meal.idMeal);
        results.push(meal);
      }
    } catch (err) {
      console.error("Error fetching meal:", err);
    }
  }

  setDishes(results);
  sessionStorage.setItem("dishes", JSON.stringify(results));
}

export default getUniqueRandomMeals;