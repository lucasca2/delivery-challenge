import { Request, Response, NextFunction } from 'express'

class Recipes {
  public queryValidator (req: Request, res: Response, next: NextFunction): Response | void {
    let { i: igredients } = req.query

    if (!igredients) return res.status(400).json({ error: 'You need to inform the igredients' })
    if (typeof igredients !== 'string' && !Array.isArray(igredients)) return res.status(400).json({ error: 'Bad request' })

    if (!Array.isArray(igredients)) igredients = igredients.split(/\s*,\s*/)

    if (igredients.length > 3) return res.status(400).json({ error: 'You need to inform 3 ingredients or less' })

    req.query.i = igredients

    return next()
  }
}

export default new Recipes()
