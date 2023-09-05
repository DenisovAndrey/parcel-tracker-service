import {Serializable} from "../entities/Serializable";

export abstract class Checkpoint implements Serializable{
  abstract trackingNumber: string;
  abstract location: string;
  abstract timestamp: Date;
  abstract status: string;
  abstract statusText: string;
  abstract statusDetails: string;
  abstract parsRawData(data: Object): void
}

