import {parseCSV} from "./CSVParser";

const parsedOrders =  [
  {
    orderNo: 'ORD-123-2018',
    tracking_number: '00340000161200000001',
    courier: 'DHL',
    street: 'Landwehrstr. 39',
    zip_code: '80336',
    city: 'München',
    destination_country_iso3: 'DEU',
    email: 'julian@parcellab.com',
    articleNo: 'A-B2-U',
    articleImageUrl: 'http://cdn.parcellab.com/img/sales-cannon/parcellab-bag.jpg',
    quantity: '1',
    product_name: 'parcelLab Tote Bag'
  },
  {
    orderNo: 'ORD-123-2018',
    tracking_number: '00340000161200000001',
    courier: 'DHL',
    street: 'Landwehrstr. 39',
    zip_code: '80336',
    city: 'München',
    destination_country_iso3: 'DEU',
    email: 'julian@parcellab.com',
    articleNo: 'A-C1-L',
    articleImageUrl: 'http://cdn.parcellab.com/img/sales-cannon/parcellab-cap.jpg',
    quantity: '2',
    product_name: 'parcelLab Branded Cap'
  },
  {
    orderNo: '780XX004',
    tracking_number: '00331612197202003141',
    courier: 'DHL',
    street: 'Schillerstr. 23a',
    zip_code: '10625',
    city: 'Berlin',
    destination_country_iso3: 'DEU',
    email: 'julian@parcellab.com',
    articleNo: '',
    articleImageUrl: '',
    quantity: '',
    product_name: ''
  }
]

const parsedCheckpoints = [
  {
    tracking_number: '00340000161200000001',
    location: '',
    timestamp: '2018-04-01T00:00:00.000Z',
    status: 'OrderProcessed',
    status_text: 'Order processed',
    status_details: 'The order has been processed.'
  },
  {
    tracking_number: '00340000161200000001',
    location: '',
    timestamp: '2018-04-04T23:00:00.000Z',
    status: 'PickUpPlanned',
    status_text: 'Pick-up planned',
    status_details: 'The goods will be handed over to the logistics company at the latest at the defined time.'
  },
  {
    tracking_number: '00340000161200000001',
    location: '',
    timestamp: '2018-04-04T12:17:00.000Z',
    status: 'Upgrade',
    status_text: 'Finishing',
    status_details: 'The goods are being finished and personalised.'
  },
  {
    tracking_number: '00340000161200000001',
    location: 'Feucht',
    timestamp: '2018-04-04T18:14:59.000Z',
    status: 'InboundScan',
    status_text: 'Dispatched',
    status_details: 'The goods have been sent.'
  },
  {
    tracking_number: '00340000161200000001',
    location: 'Rüdersdorf',
    timestamp: '2018-04-06T04:54:00.000Z',
    status: 'DestinationDeliveryCenter',
    status_text: 'Delivery is being prepared',
    status_details: 'The goods have arrived in the destination region.'
  },
  {
    tracking_number: '00340000161200000001',
    location: '',
    timestamp: '2018-04-06T05:58:00.000Z',
    status: 'Scheduled',
    status_text: 'Delivery date set',
    status_details: 'An appointment to make the delivery has been made. The goods will be delivered on Saturday, Apr 7th, 2018, between 9:30 am and 1:00 pm.'
  },
  {
    tracking_number: '00331612197202003141',
    location: '',
    timestamp: '2020-03-01T00:00:00.000Z',
    status: 'OrderProcessed',
    status_text: 'Order processed',
    status_details: 'The order has been processed.'
  }
]

describe('CSV parser', () => {
  describe('orders', () => {
      it(`parses checkpoints correctly`, async () => {
        const orders = await parseCSV('data/trackings.csv');
        expect(orders).toEqual(parsedOrders)
      })
  })
  describe('checkpoints', () => {
      it(`parses checkpoints correctly`, async () => {
        const checkpoints = await parseCSV('data/checkpoints.csv');
        expect(checkpoints).toEqual(parsedCheckpoints)
      })
  })
})
