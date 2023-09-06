import { Router } from 'express'
import {OrdersPaths} from "./paths";
import {getOrders} from "../actions/ordersAction";

const router = Router()

router.get(OrdersPaths.ROOT, getOrders)
export default router
