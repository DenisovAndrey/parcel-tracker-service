import { Router } from 'express'
import {TrackingPaths} from "./paths";

const router = Router()

router.get(TrackingPaths.ROOT, getTrackings)
export default router
