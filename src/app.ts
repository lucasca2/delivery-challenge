import express, { Application } from 'express'
import cors from 'cors'

class App {
  public server: Application;

  public constructor () {
    this.server = express()

    this.middlewares()
  }

  private middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }
}

export default new App().server
