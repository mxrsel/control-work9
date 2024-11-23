import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiTransaction, TransactionInfo} from "../../types.ts";
import {
    createNewTransaction,
    deleteTransaction,
    fetchTransactions,
    getTransactionById
} from "../thunks/transactionThunk.ts";
import {changeCategory} from "../thunks/categoryThunk.ts";

interface TransactionState {
    transaction: TransactionInfo[],
    oneTransaction: ApiTransaction | null
    isLoading: boolean;
    isDeleteLoading: boolean | string
    isError: boolean
}

const initialState: TransactionState = {
    transaction: [],
    oneTransaction: null,
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
            .addCase(
                getTransactionById.pending, (state) => {
                    state.isLoading = false;
                    state.oneTransaction = null
                    state.isError = false
                })
            .addCase(
                getTransactionById.fulfilled, (state, action: PayloadAction<ApiTransaction | null>) => {
                    state.isLoading = false
                    state.oneTransaction = action.payload
                })
            .addCase(
                getTransactionById.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                changeCategory.pending, (state) => {
                    state.isLoading = false;
                    state.isError = false
                })
            .addCase(
                changeCategory.fulfilled, (state) => {
                    state.isLoading = false
                    state.oneTransaction = null
                })
            .addCase(
                changeCategory.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
    }
})

export const transactionReducer = transactionSLice.reducer