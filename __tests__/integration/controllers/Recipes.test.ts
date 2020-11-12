import request from 'supertest'
import app from '../../../src/app'

describe('Recipes', () => {
  it('should return recipes if pass the correct parameters', async () => {
    const response = await request(app).get('/recipes').query({ i: 'garlic' })

    expect(response.status).toBe(200)

    expect(response.body).toEqual(expect.objectContaining({
      keywords: expect.any(Array),
      recipes: expect.any(Array)
    }))

    const recipes = response.body.recipes

    if (recipes.length > 0) {
      const recipe = recipes[0]

      expect(recipe).toEqual(expect.objectContaining({
        title: expect.any(String),
        ingredients: expect.any(Array),
        link: expect.any(String),
        gif: expect.any(String)
      }))

      const ingredients = recipe.ingredients
      const expectedIngredients = JSON.parse(JSON.stringify(recipe.ingredients)).sort()

      expect(ingredients).toEqual(expectedIngredients)
    }
  })

  it('should return error if pass 3 or more ingredients', async () => {
    const response = await request(app).get('/recipes').query({ i: 'eggs, bacon, garlic, onion' })

    expect(response.status).toBe(400)
  })

  it("should return error if don't pass ingredients", async () => {
    const response = await request(app).get('/recipes').query({ i: '' })

    expect(response.status).toBe(400)
  })
})
