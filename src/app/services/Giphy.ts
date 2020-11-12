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

  public async getOneGif (query: string): Promise<string> {
    try {
      const { data: gifs } = await this.api.get('/gifs/search', { params: { q: query } })

      return gifs?.data?.[0]?.images?.original?.url
    } catch (e) {
      const err = { error: `Error in Giphy: ${e.message}` }
      throw err
    }
  }
}

export default new Giphy()
