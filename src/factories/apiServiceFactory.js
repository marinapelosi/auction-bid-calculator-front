import ApiService from '@/services/apiService';

export function createApiService() {
  const baseURL = 'http://127.0.0.1:8000/api';
  return new ApiService(baseURL);
}
