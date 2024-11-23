import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TransactionInfo} from "../../types.ts";
import {createNewTransaction, deleteTransaction, fetchTransactions} from "../thunks/transactionThunk.ts";

interface TransactionState {
    transaction: TransactionInfo[],
    isLoading: boolean;
    isDeleteLoading: boolean | string
    isError: boolean
}

const initialState: TransactionState = {
    transaction: [],
    isDeleteLoading: false,
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
                fetchTransactions.fulfilled, (state, action: PayloadAction<TransactionInfo[]>) => {
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
            .addCase(
                deleteTransaction.pending, (state, {meta}) => {
                    state.isDeleteLoading = meta.arg;
                    state.isError = false
                })
            .addCase(
                deleteTransaction.fulfilled, (state) => {
                    state.isLoading = false
                })
            .addCase(
                deleteTransaction.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
    }
})

export const transactionReducer = transactionSLice.reducer