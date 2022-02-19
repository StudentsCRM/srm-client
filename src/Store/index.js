import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './slice/authenticationSlice';

const rootReducers = combineReducers({
  authSlice: authSlice,
});

export default configureStore({
  reducer: rootReducers,
});
