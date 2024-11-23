import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useAppSelector} from "../../app/hooks.ts";
import {ApiTransaction, TransactionMutation} from "../../types.ts";
import Spinner from "../UI/Spinner/Spinner.tsx";

interface Props {
    addNewTransaction: (transaction: ApiTransaction) => void;
    existingTransaction?: TransactionMutation;
    isLoading?: boolean
}

const initialState: TransactionMutation = {
    category: '',
    amount: 0,
    createdAt: '',
}

const TransactionForm: React.FC<Props> = ({addNewTransaction, existingTransaction = initialState, isLoading = false}) => {
    const [newTransaction, setNewTransaction] = useState(existingTransaction);
    const [type, setType] = useState<'income' | 'expense'>('income');
    const categories = useAppSelector((state) => state.category.category);

    const handleChangeTransaction = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = event.target;

        setNewTransaction((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(newTransaction.amount === 0) {
            alert('Enter amount!')
        } else {

            addNewTransaction({
                ...newTransaction,
                amount: type === 'expense' ? -Math.abs(newTransaction.amount) : newTransaction.amount,
                createdAt: new Date().toISOString()
            });
        }
    }
    return (
        <>
            {isLoading ? <Spinner/>
                :
                <form className='form-control' onSubmit={handleSubmit}>
                    <div className='group-form'>
                        <label>
                            Type:
                            <select
                                id='type'
                                name='type'
                                value={type}
                                onChange={(event) => setType(event.target.value as 'income' | 'expense')}
                                className='form-select'>
                                <option value='income'>Income</option>
                                <option value='expense'>Expense</option>
                            </select>
                        </label>
                    </div>

                    <div className='group-form'>
                        <label>
                            Category:

                            <select
                                id='category'
                                name='category'
                                className='form-select'
                                value={newTransaction.category}
                                onChange={handleChangeTransaction}
                            >
                                <option value=''>Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className='group-form'>
                        <label>
                            Amount:
                            <input
                                type='number'
                                name='amount'
                                id='amount'
                                className='form-control'
                                value={newTransaction.amount}
                                onChange={handleChangeTransaction}/>
                        </label>
                    </div>
                    <button className='btn btn-dark'>Add Transaction</button>
                </form>
            }
        </>
    );
};

export default TransactionForm;