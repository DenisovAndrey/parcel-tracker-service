import {DeliverySuppliers} from "../entities/DeliverySuppliers";
import {Address} from "../entities/Address";
import {Serializable} from "../entities/Serializable";
import {Article} from "../entities/Article";

export abstract class Order implements Serializable{
  orderNo: string = '';
  trackingNumber: string = '';
  destinationCountryIso3: string = '';
  email: string = '';

  article: Article = {
    articleNo: '',
    articleImageUrl: '',
    quantity: 0,
    productName: ''
  };
  address: Address = {
    street: '',
    zip_code: '',
    city: '',
  };

  abstract courier: DeliverySuppliers;
  abstract parsRawData(data: Object): void


}

