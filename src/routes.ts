import { Router } from 'express'

// Routes
import Routes from './app/routes/index'

const routes = Router()

routes.use('/recipes', Routes.Recipes)

export default routes
