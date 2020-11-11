import { Request, Response } from 'express'
import RecipePuppy from '../services/RecipePuppy'

class Recipes {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const { i: igredients } = req.query

      const response = await RecipePuppy.getRecipes(igredients)

      return res.json({
        keywords: igredients,
        recipes: response
      })
    } catch (e) {
      return res.json(e)
    }
  }
}

export default new Recipes()
