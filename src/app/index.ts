import express, { type Application } from "express";

export default (app: Application): void => {
  app.use(express.json())
}
