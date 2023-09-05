import { Router } from 'express'
import {TrackingPaths} from "./paths";
import {getTrackings} from "../actions/trackingsAction";

const router = Router()

router.get(TrackingPaths.ROOT, getTrackings)
export default router
