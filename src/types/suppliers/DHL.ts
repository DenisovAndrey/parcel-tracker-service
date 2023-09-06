import {Order} from "../abstractions/Order";
import {DeliverySuppliers} from "../entities/DeliverySuppliers";
import {Checkpoint} from "../abstractions/Checkpoint";

export interface DHLOrderRawDataResponse {
  orderNo: string;
  tracking_number: string;
  courier: string;
  street: string;
  zip_code: string;
  city: string;
  destination_country_iso3: string;
  email: string;
  articleNo: string;
  articleImageUrl: string;
  quantity: string;
  product_name: string;
}

export interface DHLCheckpointRawDataResponse {
  tracking_number: string;
  location: string;
  timestamp: string;
  status: string;
  status_text: string;
  status_details: string;
}

export class DHLOrder extends Order {
  courier: DeliverySuppliers = DeliverySuppliers.DHL
  parsRawData(rawData: DHLOrderRawDataResponse): void {
    this.orderNo = rawData.orderNo || '';
    this.trackingNumber = rawData.tracking_number || '';
    this.destinationCountryIso3 = rawData.destination_country_iso3 || '';
    this.email = rawData.email || '';

    this.article = {
      articleNo: rawData.articleNo || '',
      articleImageUrl: rawData.articleImageUrl || '',
      quantity: Number(rawData.quantity) || 0,
      productName: rawData.product_name || ''
    };

    this.address = {
      street: rawData.street || '',
      zip_code: rawData.zip_code || '',
      city: rawData.city || '',
    };
  }
}

export class DHLCheckpoint extends Checkpoint {
  parsRawData(rawData: DHLCheckpointRawDataResponse): void {
    this.trackingNumber = rawData.tracking_number || '';
    this.location = rawData.location || '';
    this.timestamp = new Date(rawData.timestamp);
    this.status = rawData.status || '';
    this.statusText = rawData.status_text || '';
    this.statusDetails = rawData.status_details || '';
  }
}
