import { type Request, type Response } from 'express'
import {getCheckpoints} from "./checkpointsAction";

const mockCheckpoints = [{id: 'testData'}, {id: 'testData2'}];
jest.mock('../services/CheckpointsService', () => ({
  CheckpointsService: class {
    static async getCheckpointsByTrackingNumber(t: string) {
      return mockCheckpoints;
    }
  },
}));


type ActionRequest = Request<{trackingNumber: string}, any, any, any>

describe('CheckpointsAction', () => {
  let req: Partial<ActionRequest>
  let res: Partial<Response>

  beforeEach(() => {
    req = {
      params: {
        trackingNumber: '1'
      }
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return 400 if no trackingNumber is provided', async () => {
    req.params = { trackingNumber: undefined } as any;
    await getCheckpoints(req as ActionRequest, res as Response)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing trackingNumber parameter' })
  })

  it('should return checkpoints array', async () => {
    await getCheckpoints(req as ActionRequest, res as Response)
    expect(res.json).toHaveBeenCalledWith({"checkpoints": mockCheckpoints})
  })
})
