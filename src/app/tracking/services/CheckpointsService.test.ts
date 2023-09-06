import {OrdersService} from "./OrdersService";
import {CheckpointsService} from "./CheckpointsService";

const checkpointsMock = [{trackingNumber: '1'}, {trackingNumber: '1'}]
jest.mock('./supliers/DHLSupplierService', () => ({
  DHLSupplierService: class {
    static async getCheckpoints(t: string) {
      return checkpointsMock
    }
  },
}));

describe('CheckpointsService', () => {
  describe('getCheckpointsByTrackingNumber', () => {
    it('return array of orders', async () => {
      const checkpoints = await CheckpointsService.getCheckpointsByTrackingNumber('1');
      expect(checkpoints).toEqual(checkpointsMock);
    });
  })

});
