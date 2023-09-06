import { Router } from 'express'
import {TrackingPaths} from "./paths";
import {getOrders} from "../actions/trackingsAction";

const router = Router()

router.get(TrackingPaths.ROOT, getOrders)
export default router
