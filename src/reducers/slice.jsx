import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "../components/redux/operators"
import { createReducer } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: "",
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
addContact: (state, action) => {
  return [...state, action.payload];
},
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

const rootReducer = createReducer({
    name: "phonebook",
    initialState,
    extraReducers: builder => {
        //* add Contact
        builder.addCase(fetchContacts.pending, state => {
            state.contacts.isLoading = true;
        })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                console.log(action.payload);
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.error = action.payload;
                state.contacts.isLoading = false;
            });
    }
})
export const { addContact, deleteContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;


export default {
  contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  rootReducer: rootReducer.reducer,
};
