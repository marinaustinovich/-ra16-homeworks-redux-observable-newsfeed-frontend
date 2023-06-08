import {
  NEWS_REQUEST,
  NEWS_FAILURE,
  NEWS_SUCCESS,
  LAST_NEWS_REQUEST,
  LAST_NEWS_FAILURE,
  LAST_NEWS_SUCCESS,
} from './actionTypes';


export const newsRequest = () => ({
  type: NEWS_REQUEST,
});

export const newsFailure = error => ({
  type: NEWS_FAILURE,
  payload: {error},
});

export const newsSuccess = news => ({
  type: NEWS_SUCCESS,
  payload: {news},
});

export const lastNewsRequest = (lastId) => ({
  type: LAST_NEWS_REQUEST,
  payload: {lastId},
});

export const lastNewsFailure = err => ({
  type: LAST_NEWS_FAILURE,
  payload: {err},
});

export const lastNewsSuccess = lastNews => ({
  type: LAST_NEWS_SUCCESS,
  payload: {lastNews},
});