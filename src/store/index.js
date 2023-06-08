import { combineReducers, compose, } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import newsReducer from '../reducers/news';
import { uploadLastNewsEpic, uploadNewsEpic } from '../epics';

const rootReducer = combineReducers({
  news: newsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  uploadLastNewsEpic,
  uploadNewsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer, 
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(epicMiddleware),
  devTools: composeEnhancers,
});

epicMiddleware.run(epic);

export default store;