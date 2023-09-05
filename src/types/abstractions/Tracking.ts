import {DeliverySuppliers} from "../entities/DeliverySuppliers";
import {Address} from "../entities/Address";
import {Serializable} from "../entities/Serializable";
import {Article} from "../entities/Article";

export abstract class Tracking implements Serializable{
  abstract orderNo: string;
  abstract trackingNumber: string;
  abstract courier: DeliverySuppliers;
  abstract address: Address;
  abstract destination_country_iso3: string;
  abstract email: string;
  abstract article: Article;
  abstract parsRawData(data: Object): void
}

