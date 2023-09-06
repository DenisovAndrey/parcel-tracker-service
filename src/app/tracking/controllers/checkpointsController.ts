import { Router } from 'express'
import {CheckpointsPaths, OrdersPaths} from "./paths";
import {getCheckpoints} from "../actions/checkpointsAction";

const router = Router()

router.get(`${CheckpointsPaths.ROOT}:trackingNumber`, getCheckpoints)
export default router
