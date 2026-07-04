export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh',
  },

  dashboard: {
    summary: '/dashboard/summary',
  },

  identity: {
    validate: '/identity/validate',
    uploadDocument: '/identity/document',
    liveness: '/identity/liveness',
  },

  kyc: {
    list: '/kyc',
    upload: '/kyc/upload',

  },
} as const;