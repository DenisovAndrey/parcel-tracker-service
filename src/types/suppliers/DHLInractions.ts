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
