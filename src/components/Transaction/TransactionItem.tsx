import React, {MouseEventHandler} from 'react';
import {TransactionInfo} from "../../types.ts";
import {NavLink} from "react-router-dom";

interface Props {
    transaction: TransactionInfo
    onDelete: MouseEventHandler
}

const TransactionItem: React.FC<Props> = ({transaction, onDelete}) => {
    return (
        <div className='container mt-4 p-3 text-light bg-dark d-flex justify-content-between align-items-center' style={{borderRadius: '10px'}}>
            <div className='d-flex justify-content-between align-items-center gap-3'>
                <span>{transaction.createdAt}</span>
                <h2>{transaction.category}</h2>
            </div>

            <div>
                <strong className='me-2'>{transaction.amount}</strong>
                <NavLink className='btn btn-success me-2' to={`/editTransaction/${transaction.id}`}>Edit</NavLink>
                <button className='btn btn-danger' onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default TransactionItem;