import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactReducer";
import filterReducer from "./filterReducer";

const combinedReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
