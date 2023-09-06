import {Checkpoint} from "./Checkpoint";
import {Order} from "./Order";

export abstract class DeliverySupplierService {
  static getCheckpoints(v: string): Promise<Checkpoint[]> {throw new Error("not implemented!");}
  static getOrders(v: string): Promise<Order[]> {throw new Error("not implemented!");}
};
