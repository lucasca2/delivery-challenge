import { Request, Response } from 'express'
import RecipesTransformers from '../transformers/Recipes'
import RecipePuppy from '../services/RecipePuppy'

export type RecipeType = {
  title: string,
  ingredients: string[],
  link: string,
  gif: string,
}

class Recipes {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const { i: igredients } = req.query

      let response = await RecipePuppy.getRecipes(igredients)
      response = await RecipesTransformers.transformRecipes(response.results)

      return res.json({
        keywords: igredients,
        recipes: response
      })
    } catch (e) {
      return res.status(500).json(e)
    }
  }
}

export default new Recipes()
