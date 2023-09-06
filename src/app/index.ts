import express, { type Application } from "express";
import ordersController from "./tracking/controllers/ordersController";
import {OrdersPaths} from "./tracking/controllers/paths";

export default (app: Application): void => {
  app.use(express.json())
  app.use(OrdersPaths.ORDERS, ordersController)
}
