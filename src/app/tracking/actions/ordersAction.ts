import {Order} from "../../../types/abstractions/Order";
import { type Request } from '../../../types/Request'
import { type Response } from '../../../types/Response'
import {OrdersService} from "../services/OrdersService";

export const getOrders = async (req: Request<{ userEmail: string }>, res: Response<{ orders: Order[] }>): Promise<void> => {
  const { userEmail } = req.query

  if (userEmail === undefined) {
    res.status(400).json({ error: 'Missing email parameter' })
    return
  }

  const orders: Order[] = await OrdersService.getOrdersByEmail(userEmail)
  res.json({ orders })
}
