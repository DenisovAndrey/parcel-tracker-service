import {Order} from "../../../types/abstractions/Order";
import {DHLSupplierService} from "./supliers/DHLSupplierService";
import {UPSSupplierService} from "./supliers/UPSSupplierService";

export class OrdersService {
  static async getOrdersByEmail (email: string): Promise<Order[]> {
    const orders = await DHLSupplierService.getOrders(email)


    orders.push(...(await UPSSupplierService.getOrders(email)))// does nothing. Just to show how Suppliers can be scaled

    return orders
  }
}

