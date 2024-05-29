import $api from '../http';

export default class AuthService {
  static async login(email, password) {
    return $api.post('/api/auth/signin', { email, password });
  }

  static async registration(name, email, password, phone, address) {
    return $api.post('/api/auth/signup', { name, email, password, phone, address });
  }

  static async activate(token) {
    return $api.put(`/api/auth/confirm-email/${token}`);
  }

  static async getCurrentUser() {
    return $api.get('/api/auth/current-user');
  }
}
