import axios, { AxiosInstance } from 'axios'

class Giphy {
  private api: AxiosInstance;

  public constructor () {
    this.api = axios.create({
      baseURL: process.env.GIPHY_API_URL,
      params: {
        api_key: process.env.GIPHY_API_KEY
      }
    })
  }

  public async getGif (query: string): Promise<any> {
    const { data } = await this.api.get<any>('/', { params: { q: query } })

    return data
  }
}

export default new Giphy()
