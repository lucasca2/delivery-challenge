import { Router } from 'express'

import Recipes from './Recipes'

import Controllers from '../controllers'

type RoutesProps = {
  Recipes: Router
}

const Routes: RoutesProps = {
  Recipes: Recipes(Router(), Controllers.Recipes)
}
export default Routes
