import {DHLCheckpoint, DHLCheckpointRawDataResponse, DHLOrder, DHLOrderRawDataResponse} from "./DHL";

const rawOrderData: DHLOrderRawDataResponse = {
  orderNo: '1',
  tracking_number: '2',
  courier: 'DHL',
  street: 'Str. 39',
  zip_code: '808080',
  city: 'München',
  destination_country_iso3: 'DEU',
  email: 'test',
  articleNo: 'A213',
  articleImageUrl: 'imageurl',
  quantity: '1',
  product_name: 'cool product'
  }

const parsedOrder = {
  orderNo: '1',
  trackingNumber: '2',
  destinationCountryIso3: 'DEU',
  email: 'test',
  article: {
    articleNo: 'A213',
    articleImageUrl: 'imageurl',
    quantity: 1,
    productName: 'cool product'
  },
  address: { street: 'Str. 39', zip_code: '808080', city: 'München' },
  courier: 'DHL'
};

const rawCheckpointData: DHLCheckpointRawDataResponse = {
  tracking_number: '123123',
  location: 'Sky',
  timestamp: '2018-04-01T00:00:00.000Z',
  status: 'OrderProcessed',
  status_text: 'Order processed',
  status_details: 'The order has been processed.'
};

const parsedCheckpoint = {
  trackingNumber: '123123',
  location: 'Sky',
  timestamp: new Date('2018-04-01T00:00:00.000Z'),
  status: 'OrderProcessed',
  statusText: 'Order processed',
  statusDetails: 'The order has been processed.'
}

describe('DHLOrder', () => {
  describe('parsRawData', () => {
    it('parses raw order correctly', async () => {
      const dhlOrder = new DHLOrder();
      dhlOrder.parsRawData(rawOrderData)
      expect(dhlOrder).toEqual(parsedOrder)
    })
    it('set default values if fields are missed', async () => {
      const expectedParsedOrder = {...parsedOrder, article: {...parsedOrder.article, productName: ''}, address: {...parsedOrder.address, street: ''}}
      const dhlOrder = new DHLOrder();
      dhlOrder.parsRawData({...rawOrderData, street: undefined, product_name: undefined } as any)
      expect(dhlOrder).toEqual(expectedParsedOrder)
    })
  })
})


describe('DHLCheckpoint', () => {
  describe('parsRawData', () => {
    it('parses raw order correctly', async () => {
      const dhlCheckpoint = new DHLCheckpoint();
      dhlCheckpoint.parsRawData(rawCheckpointData)
      expect(dhlCheckpoint).toEqual(parsedCheckpoint)
    })
    it('set default values if fields are missed', async () => {
      const expectedCheckpoint = {...parsedCheckpoint, location: '', statusDetails: ''}
      const dhlCheckpoint = new DHLCheckpoint();
      dhlCheckpoint.parsRawData({...rawCheckpointData, location: undefined, status_details: undefined } as any)
      expect(dhlCheckpoint).toEqual(expectedCheckpoint)
    })
  })
})
