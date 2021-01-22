// URL
export const URL_LOGIN = '/auth/firebase?cid=%(cid)s&cnl=%(cnl)s&src=%(src)s';
export const URL_LOGIN_WAITER = '/auth/login?cid=%(cid)s';
export const URL_ACCOUNT_UPDATE = '/account_update';

// Types
export const types = {
  AUTH_FAILED: 'AUTH_FAILED',
  AUTH_LOADING: 'AUTH_LOADING',
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_RESET: 'AUTH_RESET',
  AUTH_WAITER_LOADING: 'AUTH_WAITER_LOADING',
  AUTH_WAITER_FAILED: 'AUTH_WAITER_FAILED',
  AUTH_WAITER_SUCCESS: 'AUTH_WAITER_SUCCESS',
  AUTH_WAITER_RESET: 'AUTH_WAITER_RESET',
};
