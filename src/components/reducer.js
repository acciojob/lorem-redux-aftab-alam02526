import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from "./actions";

const initialState = {
  title: "",
  body: "",
  loading: false,
  error: null
};

function loremReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return { ...state, loading: true };

    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        title: action.payload.title,
        body: action.payload.body
      };

    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default loremReducer;
