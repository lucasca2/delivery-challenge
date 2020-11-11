import axios, { AxiosInstance, AxiosResponse } from 'axios'

type Recipe = {
  title: string;
  href: string;
  igredients: string;
  thumbnail: string;
}

type ResponseRecipePuppy = {
  title: string;
  version: string;
  href: string;
  results: Recipe[];
}

class RecipePuppy {
  private api: AxiosInstance;

  public constructor () {
    this.api = axios.create({ baseURL: process.env.RECIPE_PUPPY_API })
  }

  public async getRecipes (igredients: string): Promise<ResponseRecipePuppy> {
    const { data } = await this.api.get<ResponseRecipePuppy>('/', { params: { i: igredients } })

    return data
  }
}

export default new RecipePuppy()
