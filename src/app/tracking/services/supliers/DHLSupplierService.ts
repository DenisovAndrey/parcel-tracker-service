import {DeliverySupplierService} from "../../../../types/abstractions/DeliverySupplierService";
import {Checkpoint} from "../../../../types/abstractions/Checkpoint";
import {Order} from "../../../../types/abstractions/Order";
import {parseCSV} from "../../../../utils/parsers/CSVParser";
import {
  DHLCheckpoint, DHLCheckpointRawDataResponse,
  DHLOrder,
  DHLOrderRawDataResponse
} from "../../../../types/suppliers/DHL";

const dhlTrackingsInteractMock = (email: string) => {
  // assume we interacted with DHL provider and got file with trackigns by email as a response
  return 'data/trackings.csv';
}

const dhlCheckpointsInteractMock = (email: string) => {
  // assume we interacted with DHL provider and got file with checkpoints as a response
  return 'data/checkpoints.csv';
}


export class DHLSupplierService extends DeliverySupplierService {
  static async getCheckpoints(email: string): Promise<Checkpoint[]> {
    // TODO: check if we need pass an order ID instead
    const filePath = dhlCheckpointsInteractMock(email)

    const rawResponseData = await parseCSV<DHLCheckpointRawDataResponse>(filePath)
    const checkpoints = rawResponseData.map((rawOrderObject) => {
      const checkpoint: Checkpoint = new DHLCheckpoint();
      checkpoint.parseRawData(rawOrderObject);
      return checkpoint;
    })

    return checkpoints;
  }
  static async getOrders(email: string): Promise<Order[]> {
    const filePath = dhlTrackingsInteractMock(email)

    const rawResponseData = await parseCSV<DHLOrderRawDataResponse>(filePath)
    const orders = rawResponseData.map((rawOrderObject) => {
      const order: Order = new DHLOrder();
      order.parseRawData(rawOrderObject);
      return order;
    })

    return orders;
  }
}
