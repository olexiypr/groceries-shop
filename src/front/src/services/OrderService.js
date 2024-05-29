import $api from '../http';

export default class OrderService {
  static async createOrder(orderData) {
    return $api.post('/api/order/create', orderData);
  }
}
