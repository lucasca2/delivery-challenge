import { Router } from 'express'
import { ControllerType } from 'types'

export default function Recipes (routes: Router, Controller: ControllerType): Router {
  routes.get('/', Controller.index)

  return routes
}
