export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh',
  },

  identity: {
    validate: '/identity/validate',
    uploadDocument: '/identity/document',
    liveness: '/identity/liveness',
  },
} as const;