import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/profile'),
};

export const serviceAPI = {
  getAll: (category) => api.get('/services', { params: { category } }),
  getById: (id) => api.get(`/services/${id}`),
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`),
};

export const bookingAPI = {
  create: (data) => api.post('/bookings', data),
  getAll: () => api.get('/bookings'),
  updateStatus: (id, data) => api.put(`/bookings/${id}/status`, data),
  cancel: (id) => api.put(`/bookings/${id}/cancel`),
};

export const paymentsAPI = {
  createCheckoutSession: (data) => api.post('/payments/create-checkout-session', data),
  confirmSession: (data) => api.post('/payments/confirm-session', data),
};

export const staffAPI = {
  getAll: () => api.get('/staff'),
  getById: (id) => api.get(`/staff/${id}`),
  updateAvailability: (id, data) => api.put(`/staff/${id}/availability`, data),
};

export const jobAPI = {
  submit: (data) => api.post('/jobs', data),
  getAll: () => api.get('/jobs'),
  updateStatus: (id, data) => api.put(`/jobs/${id}/status`, data),
};

export const aiAPI = {
  getImageCategories: () => api.get('/ai/categories'),
  getBackgroundImages: (category, count = 3) => 
    api.get('/ai/backgrounds', { params: { category, count } }),
  generateBackgroundImage: (category, style = 'professional') =>
    api.get('/ai/generate', { params: { category, style } }),
};

export default api;
