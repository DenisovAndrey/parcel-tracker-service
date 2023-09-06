import {Serializable} from "../entities/Serializable";

export abstract class Checkpoint implements Serializable{
  trackingNumber: string = '';
  location: string = '';
  timestamp: Date = new Date();
  status: string = '';
  statusText: string = '';
  statusDetails: string = '';
  abstract parseRawData(data: Object): void
}

