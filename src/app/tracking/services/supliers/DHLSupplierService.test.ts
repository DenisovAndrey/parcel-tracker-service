import { DHLSupplierService } from "./DHLSupplierService";

jest.mock('../../../../utils/parsers/CSVParser', () => ({
  parseCSV: () => [{ text: 'parsedRaw' }, { text: 'parsedRaw' }],
}));
jest.mock('../../../../types/suppliers/DHL', () => ({
  DHLCheckpoint: class {
    trackingNumber: string = '';
    parseRawData(v: { text: string }) {
      this.trackingNumber = v.text;
    }
  },
  DHLOrder: class {
    value: string = '';
    parseRawData(v: { text: string }) {
      this.value = v.text;
    }
  },
}));

describe('DHLSupplierService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getCheckpoints', () => {
    it('return parsed checkpoints as expected', async () => {
      const checkpoints = await DHLSupplierService.getCheckpoints('1');
      expect(checkpoints).toEqual([
        {
          trackingNumber: 'parsedRaw',
        },
        {
          trackingNumber: 'parsedRaw',
        },
      ]);
    });
  })

  describe('getOrders', () => {
    it('return parsed orders as expected', async () => {
      const orders = await DHLSupplierService.getOrders('test@test.tes');
      expect(orders).toEqual([
        {
          value: 'parsedRaw',
        },
        {
          value: 'parsedRaw',
        },
      ]);
    });
  })

});
