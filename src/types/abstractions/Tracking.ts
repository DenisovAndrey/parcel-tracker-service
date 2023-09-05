import {DeliverySuppliers} from "../DeliverySuppliers";
import {Address} from "../Address";
import {Serializable} from "./Serializable";

export abstract class Tracking implements Serializable{
  abstract orderNo: string;
  abstract trackingNumber: string;
  abstract courier: DeliverySuppliers;
  abstract address: Address;
  abstract destination_country_iso3: string;
  abstract email: string;
  abstract articleNo: string;
  abstract articleImageUrl: string;
  abstract quantity: number;
  abstract productName: string;
  abstract parsRawData(data: Object): void
}

