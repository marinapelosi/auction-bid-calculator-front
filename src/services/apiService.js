import axios from 'axios';

export default class ApiService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
    });
  }

  async calculateCarPrice(data) {
    return this.client.post('/calculate-car-price', data);
  }
}
