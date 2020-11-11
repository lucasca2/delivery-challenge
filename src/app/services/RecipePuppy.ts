import axios, { AxiosInstance, AxiosResponse } from 'axios'

type RecipePuppyType = {
  title: string;
  href: string;
  igredients: string;
  thumbnail: string;
}

class RecipePuppy {
  private api: AxiosInstance;

  public constructor () {
    this.api = axios.create({ baseURL: process.env.RECIPE_PUPPY_API })
  }

  public async getRecipes (igredients: string): Promise<AxiosResponse<RecipePuppyType[]>> {
    return await this.api.get('/', { params: { i: igredients } })
  }
}

export default new RecipePuppy()
