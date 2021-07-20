import { combineReducers } from '@reduxjs/toolkit';
import circles from './circles';
import users from './users';

const rootReducer = combineReducers({
  users,
  circles,
});

export default rootReducer;
