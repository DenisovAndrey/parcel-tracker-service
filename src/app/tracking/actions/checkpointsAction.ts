import { type Request } from '../../../types/Request'
import { type Response } from '../../../types/Response'
import {CheckpointsService} from "../services/CheckpointsService";
import {Checkpoint} from "../../../types/abstractions/Checkpoint";

export const getCheckpoints = async (req: Request<{}, {trackingNumber : string}>, res: Response<{ checkpoints: Checkpoint[] }>): Promise<void> => {
  const { trackingNumber } = req.params;

  if (trackingNumber === undefined) {
    res.status(400).json({ error: 'Missing trackingNumber parameter' })
    return
  }

  const checkpoints: Checkpoint[] = await CheckpointsService.getCheckpointsByTrackingNumber(trackingNumber)
  res.json({ checkpoints })
}
