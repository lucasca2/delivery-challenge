import { Request, Response } from 'express'

class Recipes {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.json({ ok: true })
  }
}

export default new Recipes()
