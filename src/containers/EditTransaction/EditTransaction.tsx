import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {changeTransaction, getTransactionById} from "../../store/thunks/transactionThunk.ts";
import {ApiTransaction} from "../../types.ts";
import TransactionForm from "../../components/TransactionForm/TransactionForm.tsx";

const EditTransaction = () => {
    const {transactionId} = useParams();
    const dispatch = useAppDispatch();
    const transaction = useAppSelector((state) => state.transaction.oneTransaction);
    const loading = useAppSelector((state) => state.transaction.isLoading);
    const navigate = useNavigate();

    const editingTransactionById = useCallback( async() => {
        if (transactionId) {
             dispatch(getTransactionById(transactionId));
        }
    }, [dispatch, transactionId]);

    useEffect(() => {
        void editingTransactionById()
    }, [editingTransactionById]);

    const editTransaction = async(transaction: ApiTransaction) => {
        if (transactionId) {
            await dispatch(changeTransaction({transactionId: transactionId, transaction}));
            navigate('/')
        }
    }
    return transaction && (
        <div>
            <TransactionForm addNewTransaction={editTransaction} existingTransaction={transaction} isLoading={loading} isEdit/>
        </div>
    );
};

export default EditTransaction;