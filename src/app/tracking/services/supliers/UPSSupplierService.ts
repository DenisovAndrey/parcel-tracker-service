import {DeliverySupplierService} from "../../../../types/abstractions/DeliverySupplierService";
import {Checkpoint} from "../../../../types/abstractions/Checkpoint";
import {Order} from "../../../../types/abstractions/Order";


export class UPSSupplierService extends DeliverySupplierService {
  static async getCheckpoints(trackingNumber: string): Promise<Checkpoint[]> {
    // it's a mock implementation just to show how Suppliers can be scaled
    const checkpoints: Checkpoint[] = []
    return checkpoints;
  }
  static async getOrders(email: string): Promise<Order[]> {
    // it's a mock implementation just to show how Suppliers can be scaled
    const orders: Order[] = []
    return orders;
  }
}
