import { types } from 'constants/Auth';

const initialState = {
  auth: {
    login: {
      user: {},
      loading: false,
      errorCode: null,
      errorMessage: '',
    },
  },
};

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case types.AUTH_LOADING:
      return {
        ...state,
        login: {
          loading: true,
        },
      };
    case types.AUTH_LOGIN:
      return {
        ...state,
        login: {
          user: action.user,
          loading: false,
          errorCode: null,
          errorMessage: '',
        },
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        login: {
          user: {},
        },
      };
    case types.AUTH_FAILED:
      return {
        ...state,
        login: {
          loading: false,
          errorCode: action.code,
          errorMessage: action.message,
        },
      };
    case types.AUTH_RESET:
      return {
        ...state,
        login: {
          user: {},
          loading: false,
          errorCode: null,
          errorMessage: '',
        },
      };
    default:
      return state;
  }
};

export default auth;
