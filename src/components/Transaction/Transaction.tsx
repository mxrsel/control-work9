import React from 'react';
import {TransactionInfo} from "../../types.ts";
import TransactionItem from "./TransactionItem.tsx";

interface Props {
    transactions: TransactionInfo[];
    deletedTransaction: (transactionId: string) => void
}

const Transaction: React.FC<Props> = ({transactions, deletedTransaction}) => {
    return (
        <div>
            {transactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} onDelete={() => deletedTransaction(transaction.id)}/>
            ))}
        </div>
    );
};

export default Transaction;