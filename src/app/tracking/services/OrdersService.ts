import {Order} from "../../../types/abstractions/Order";
import {DHLSupplierService} from "./supliers/DHLSupplierService";

export class OrdersService {
  static async getOrdersByEmail (email: string): Promise<Order[]> {
    const orders = await DHLSupplierService.getOrders(email)

    return orders
  }
}

