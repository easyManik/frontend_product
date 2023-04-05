import * as string from "../string.js";
const initialState = {
  data: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  dataProduct: {},
  detail: null,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case string.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case string.GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case string.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: state.product.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case string.GET_PRODUCT_DETAIL_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case string.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: action.payload,
      };
    case string.GET_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case string.INSERT_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case string.INSERT_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case string.INSERT_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case string.UPDATE_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case string.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case string.UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
