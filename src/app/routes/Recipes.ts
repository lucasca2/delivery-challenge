import { Router } from 'express'
import { ControllerType } from 'types'
import RecipesValidator from '../validators/Recipes'

export default function Recipes (routes: Router, Controller: ControllerType): Router {
  routes.get('/', RecipesValidator.queryValidator, Controller.index)

  return routes
}
