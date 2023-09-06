import {DHLSupplierService} from "./supliers/DHLSupplierService";
import {Checkpoint} from "../../../types/abstractions/Checkpoint";

export class CheckpointsService {
  static async getCheckpointsByTrackingNumber (trackingNumber: string): Promise<Checkpoint[]> {
    const checkpoints = await DHLSupplierService.getCheckpoints(trackingNumber)

    return checkpoints
  }
}

