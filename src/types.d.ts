import { Request, Response } from 'express'

type ControllerType = {
  store?: (req: Request, res: Response) => Promise<Response>
  index?: (req: Request, res: Response) => Promise<Response>
  show?: (req: Request, res: Response) => Promise<Response>
  update?: (req: Request, res: Response) => Promise<Response>
  delete?: (req: Request, res: Response) => Promise<Response>
}
