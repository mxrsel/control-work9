import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiTransaction, TransactionInfo, TransactionList} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";

export const fetchTransactions = createAsyncThunk<TransactionInfo[], void>(
    'transactions/fetchTransactions',
    async() => {
        const response: {data: TransactionList | null} = await axiosApi('/transactions.json');
        const transactionList = response.data

        if(transactionList === null) return [];

        const transactions = transactionList

        const newTransactions = Object.keys(transactionList).map((transaction) => {
            return {
                ...transactions[transaction],
                id: transaction
            };
        });
        return newTransactions
    }
);

export const createNewTransaction = createAsyncThunk<void, ApiTransaction>(
    'transactions/createNewTransaction',
    async(transaction) => {
        await axiosApi.post('/transactions.json', {...transaction})
    }
);

export const deleteTransaction = createAsyncThunk(
    '/transactions/deleteTransaction',
    async(transactionId: string) => {
        await axiosApi.delete(`/transactions/${transactionId}.json`);
    }
)