import $api from '../http';

export default class ProductService {
  static getAll({ limit, offset }) {
    return $api.get('/api/product/all?limit=' + limit + '&offset=' + offset);
  }
}
