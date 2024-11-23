import {configureStore} from "@reduxjs/toolkit";
import {categoryReducer} from "../store/slices/categorySlice.ts";
import {transactionReducer} from "../store/slices/transactionSLice.ts";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        transaction: transactionReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

