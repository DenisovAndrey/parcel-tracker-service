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

const dhlCheckpointsInteractMock = () => {
  // assume we interacted with DHL provider and got file with checkpoints as a response
  return 'data/checkpoints.csv';
}


export class DHLSupplierService extends DeliverySupplierService {
  static async getCheckpoints(trackingNumber: string): Promise<Checkpoint[]> {
    const filePath = dhlCheckpointsInteractMock()

    const rawResponseData = await parseCSV<DHLCheckpointRawDataResponse>(filePath)
    const checkpoints = rawResponseData.map((rawOrderObject) => {
      const checkpoint: Checkpoint = new DHLCheckpoint();
      checkpoint.parseRawData(rawOrderObject);
      return checkpoint;
    }).filter(({trackingNumber: checkpointTrackingNumber}) => trackingNumber = checkpointTrackingNumber)
    // in a real application we would pass tracking number to Supplier and get related checkpoints by tracking number

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
