import {Checkpoint} from "./Checkpoint";
import {Tracking} from "./Tracking";

export abstract class DeliverySupplierService {
  abstract getCheckpoints(): Checkpoint
  abstract getTrackings(): Tracking
};
