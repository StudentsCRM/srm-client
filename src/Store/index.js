import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducers = combineReducers({});

export default configureStore({
  reducer: rootReducers,
});
