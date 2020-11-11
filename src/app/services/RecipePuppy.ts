import axios, { AxiosInstance } from 'axios'

export type RecipePuppyType = {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}

type ResponseRecipePuppy = {
  title: string;
  version: string;
  href: string;
  results: RecipePuppyType[];
}

class RecipePuppy {
  private api: AxiosInstance;

  public constructor () {
    this.api = axios.create({ baseURL: process.env.RECIPE_PUPPY_API })
  }

  public async getRecipes (igredients: any): Promise<ResponseRecipePuppy> {
    const i = igredients.join(',')

    try {
      const { data } = await this.api.get<ResponseRecipePuppy>('/', { params: { i } })

      return data
    } catch (e) {
      const err = { error: `Error in RecipePuppy: ${e.message}` }
      throw err
    }
  }
}

export default new RecipePuppy()
