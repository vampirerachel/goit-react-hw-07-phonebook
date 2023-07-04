import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    'contacts/get',
    async () => {
        try {
            const response = await axios.get('https://64a31d54b45881cc0ae62634.mockapi.io/contact')
            return response.data
        } catch (err) {
            return err.message;
        }

    }    )
