import {Order} from "../../../types/abstractions/Order";
import { type Request } from '../../../types/Request'
import { type Response } from '../../../types/Response'
import {TrackingService} from "../services/TrackingService";

export const getTrackings = (req: Request<{ userEmail: string }>, res: Response<{ trackings: Order[] }>): void => {
  const { userEmail } = req.query

  if (userEmail === undefined) {
    res.status(400).json({ error: 'Missing email parameter' })
    return
  }

  const orders: Order[] = TrackingService.getTrackingsByEmail(userEmail)
  res.json({ orders })
}
