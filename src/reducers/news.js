import {
  NEWS_REQUEST,
  NEWS_FAILURE,
  NEWS_SUCCESS,
  LAST_NEWS_REQUEST,
  LAST_NEWS_FAILURE,
  LAST_NEWS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
    case LAST_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NEWS_FAILURE:
    case LAST_NEWS_FAILURE:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case NEWS_SUCCESS:
      const {news} = action.payload;
      return {
        ...state, 
        loading: false, 
        error: null,
        news
      };
    case LAST_NEWS_SUCCESS:
      const {lastNews} = action.payload;
      return {
        ...state, 
        loading: false, 
        error: null,
        news: state.news.concat(lastNews),
      };
    default:
      return state;
  }
}
