export const CONFIG = {
  API_BASE_URL: 'http://192.168.244.112:9000/api/v1',
  // API_BASE_URL: 'http://localhost:9000/api/v1', // For web development
  // API_BASE_URL: 'https://your-production-api.com/api/v1', // For production
  
  // API Endpoints
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login/supplier',
      REGISTER: '/auth/register/supplier',
      REFRESH_TOKEN: '/auth/refresh-token',
      LOGOUT: '/auth/logout',
      FORGOT_PASSWORD: '/auth/forgot-password',
      RESET_PASSWORD: '/auth/reset-password',
    },
    SUPPLIER: {
      PROFILE: '/suppliers/profile',
      UPDATE_PROFILE: '/suppliers/profile',
      UPDATE_LOGO: '/suppliers/profile/logo',
      UPDATE_ADDRESS: '/suppliers/address',
      UPDATE_BANK_DETAILS: '/suppliers/bank-details',
      UPLOAD_DOCUMENT: '/suppliers/verification-document',
      DASHBOARD_STATS: '/suppliers/dashboard-stats',
    },
    PRODUCTS: {
      LIST: '/products/supplier/me',
      CREATE: '/products',
      UPDATE: '/products',
      DELETE: '/products',
      DETAILS: '/products',
    },
    ORDERS: {
      LIST: '/suppliers/orders',
      DETAILS: '/suppliers/orders',
      UPDATE_STATUS: '/suppliers/orders',
      STATUS_COUNTS: '/orders/supplier/me/status-counts',
    },
    CATEGORIES: {
      LIST: '/categories',
    },
  },
  
  // App Configuration
  APP: {
    NAME: 'FarmFerry Supplier',
    VERSION: '1.0.0',
  },
  
  // Storage Keys
  STORAGE_KEYS: {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    USER_DATA: 'user_data',
    THEME: 'theme',
  },
  
  // Validation Rules
  VALIDATION: {
    PASSWORD_MIN_LENGTH: 6,
    PHONE_REGEX: /^[0-9]{10}$/,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
}; 