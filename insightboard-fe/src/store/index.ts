import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { loggerApi } from "../api/logger"

const rootReducers = combineReducers({
    api: loggerApi.reducer
})

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerApi.middleware),
    reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch