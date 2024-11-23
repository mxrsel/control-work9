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
    'transactions/deleteTransaction',
    async(transactionId: string) => {
        await axiosApi.delete(`/transactions/${transactionId}.json`);
    }
);

export const getTransactionById = createAsyncThunk<ApiTransaction | null, string>(
    'transactions/getTransactionById',
    async(transactionId: string) => {
        const response = await axiosApi<ApiTransaction | null>(`/transactions/${transactionId}.json`);
        if (!response.data) return null;

        return response.data
    }
)

export const changeTransaction = createAsyncThunk<void, {transactionId: string, transaction: ApiTransaction}>(
    'transactions/changeTransaction',
    async({transactionId, transaction}) => {
        await axiosApi.put(`/transactions/${transactionId}.json`, {...transaction})
    }
)