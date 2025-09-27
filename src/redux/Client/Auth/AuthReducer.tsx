import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  HYDRATE_AUTH, // thêm dòng này
} from "./ActionType";

const initialState = {
  loading: false,
  user: null,
  isLogin: false,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  roles: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("roles") || "[]") : [],
  error: null,
};
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // ============== HYDRATE AUTH ==============
    case HYDRATE_AUTH:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        roles: action.payload.roles || state.roles,
        isLogin: !!action.payload.token,
      };

    // ============== REGISTER ==============
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ============== LOGIN ==============
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          fullName: action.payload.fullName,
          email: action.payload.email,
        },
        token: action.payload.token,
        roles: action.payload.roles || [],
        isLogin: true,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ============== UPDATE USER ==============
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UPDATE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ============== LOGOUT ==============
    case LOGOUT_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        isLogin: false,
      };
    case LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ============== CHANGE PASSWORD ==============
    case CHANGE_PASSWORD_REQUEST:
      return { ...state, loading: true, error: null };
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state, loading: false };
    case CHANGE_PASSWORD_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
