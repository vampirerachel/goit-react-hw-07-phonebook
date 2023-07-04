import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsSlice from "./contactReducer";
import filterSlice from "./filterReducer";

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
