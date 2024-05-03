import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";

export const randomAdvice = createAsyncThunk(
    'advice/random',
    async () => {
        try {
            var { data, status } = await axios.get('https://api.adviceslip.com/advice');
            if (status == HttpStatusCode.Ok) {
                return data;
            }
        } catch (error) {
            console.log(`Random Advice Get Error: ${error}`);
            throw error;
        }
    }
)