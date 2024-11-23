import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Transaction} from "../../types.ts";
import {createNewTransaction, fetchTransactions} from "../thunks/transactionThunk.ts";

interface TransactionState {
    transaction: Transaction[],
    isLoading: boolean;
    isError: boolean
}

const initialState: TransactionState = {
    transaction: [],
    isLoading: false,
    isError: false
}

const transactionSLice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchTransactions.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                })
            .addCase(
                fetchTransactions.fulfilled, (state, action: PayloadAction<Transaction[]>) => {
                    state.isLoading = false
                    state.transaction = action.payload;
                })
            .addCase(
                fetchTransactions.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                createNewTransaction.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                })
            .addCase(
                createNewTransaction.fulfilled, (state) => {
                    state.isLoading = false
                })
            .addCase(
                createNewTransaction.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
    }
})

export const transactionReducer = transactionSLice.reducer