import { RecipeType } from '../controllers/Recipes'
import { RecipePuppyType } from '../services/RecipePuppy'
import Giphy from '../services/Giphy'

class Recipes {
  public async transformRecipes (recipes: RecipePuppyType[]): Promise<RecipeType[] | any> {
    let newRecipes = []

    newRecipes = await Promise.all(
      recipes.map(async (recipe) => {
        const { href, title } = recipe

        const gif = await Giphy.getOneGif(title)
        const ingredients = recipe.ingredients.split(/\s*,\s*/).sort()

        const newRecipe: RecipeType = {
          title,
          gif,
          ingredients,
          link: href
        }

        return newRecipe
      })
    )

    return newRecipes
  }
}

export default new Recipes()
