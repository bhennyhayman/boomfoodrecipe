function getIngredientsWithMeasures(meal) {
  return Array.from({ length: 20 }, (_, i) => {
    const ing = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ing && ing.trim() !== ""
      ? `${measure?.trim() || ""} ${ing}`.trim()
      : null;
  }).filter(Boolean);
}


export default getIngredientsWithMeasures;