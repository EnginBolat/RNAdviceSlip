import { configureStore } from '@reduxjs/toolkit'
import { adviceReducer } from '../advice'

export const store = configureStore({
    reducer: {
        advice: adviceReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch