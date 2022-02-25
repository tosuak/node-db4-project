const db = require('../../data/db-config');

async function getRecipesById(recipes_id) {
  const recipeRows = await db('recipes as r')

  return recipeRows
}

module.exports = { getRecipesById }