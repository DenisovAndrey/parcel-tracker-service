import {OrdersService} from "./OrdersService";

const ordersMock = [{orderId: 'test'}, {orderId: 'test2'}]
jest.mock('./supliers/DHLSupplierService', () => ({
  DHLSupplierService: class {
    static async getOrders(t: string) {
      return ordersMock
    }
  },
}));

describe('OrdersService', () => {
  describe('getOrdersByEmail', () => {
    it('return array of orders', async () => {
      const orders = await OrdersService.getOrdersByEmail('test@test.tes');
      expect(orders).toEqual(ordersMock);
    });
  })

});
