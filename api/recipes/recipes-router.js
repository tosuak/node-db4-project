const router = require('express').Router()
const Recipes = require('./recipes-model');

router.get('/:recipes_id', (req, res, next) => {
  Recipes.getRecipesById(req.params.recipes_id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(next)
})


router.use((err, req, res, next) => {//eslint-disable-line
  res.status(500).json({
    customeMessage: 'something went wrong inside the recipes router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;