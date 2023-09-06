import { type Request, type Response } from 'express'
import {getOrders} from "./ordersAction";

const mockOrders = [{id: 'testData'}, {id: 'testData2'}];
jest.mock('../services/OrdersService', () => ({
  OrdersService: class {
    static async getOrdersByEmail(t: string) {
      return mockOrders;
    }
  },
}));


type ActionRequest = Request<any, any, any, { userEmail: string }>

describe('OrdersAction', () => {
  let req: Partial<ActionRequest>
  let res: Partial<Response>

  beforeEach(() => {
    req = {
      query: {
        userEmail: 'test@test.tes'
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

  it('should return 400 if no email is provided', async () => {
    req.query = { userEmail: undefined } as any;
    await getOrders(req as ActionRequest, res as Response)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing email parameter' })
  })

  it('should return orders array', async () => {
    await getOrders(req as ActionRequest, res as Response)
    expect(res.json).toHaveBeenCalledWith({"orders": mockOrders})
  })
})
