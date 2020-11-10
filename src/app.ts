import express, { Application } from 'express'

class App {
  public server: Application;

  public constructor () {
    this.server = express()
  }
}

export default new App().server
