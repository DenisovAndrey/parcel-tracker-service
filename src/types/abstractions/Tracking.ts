import {DeliverySuppliers} from "../DeliverySuppliers";
import {Address} from "../Address";
import {Serializable} from "../Serializable";
import {Article} from "../Article";

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

