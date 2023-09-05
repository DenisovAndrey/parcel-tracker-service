import {Tracking} from "../../../types/abstractions/Tracking";
import { type Request } from '../../../types/Request'
import { type Response } from '../../../types/Response'

export const getTrackings = (req: Request<{ userEmail: string }>, res: Response<{ trackings: Tracking[] }>): void => {
  const { userEmail } = req.query

  if (userEmail === undefined) {
    res.status(400).json({ error: 'Missing email parameter' })
    return
  }

  const trackings: Tracking[] = []
  res.json({ trackings })
}
