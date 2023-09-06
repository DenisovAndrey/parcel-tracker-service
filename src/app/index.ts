import express, { type Application } from "express";
import ordersController from "./tracking/controllers/ordersController";
import {CheckpointsPaths, OrdersPaths} from "./tracking/controllers/paths";
import checkpointsController from "./tracking/controllers/checkpointsController";

export default (app: Application): void => {
  app.use(express.json())
  app.use(OrdersPaths.ORDERS, ordersController)
  app.use(CheckpointsPaths.CHECKPOINTS, checkpointsController)
}
