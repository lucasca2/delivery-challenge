import { Request, Response } from 'express'
import RecipePuppy from '../services/RecipePuppy'

class Recipes {
  public async index (req: Request, res: Response): Promise<Response> {
    let { igredients } = req.query || {}

    try {
      if (!igredients) return res.status(400).json({ error: 'You need to inform the igredients' })
      if (Array.isArray(igredients)) igredients = igredients.join(',')
      if (typeof igredients === 'string') {
        const response = await RecipePuppy.getRecipes(igredients)

        return res.json({
          keywords: igredients.split(/,\s*/),
          recipes: response.results
        })
      }
    } catch (e) {
      return res.json(e)
    }
  }
}

export default new Recipes()
