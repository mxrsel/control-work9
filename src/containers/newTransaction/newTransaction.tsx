import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import {ApiTransaction} from "../../types.ts";
import {createNewTransaction} from "../../store/thunks/transactionThunk.ts";
import TransactionForm from "../../components/TransactionForm/TransactionForm.tsx";

const NewTransaction = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.transaction.isLoading);
    const navigate = useNavigate();

    const newTransactionAdded = async(transaction: ApiTransaction) => {
        await dispatch(createNewTransaction(transaction));
        navigate('/')
    }
    return (
        <div>
            <TransactionForm addNewTransaction={newTransactionAdded} isLoading={loading}/>
        </div>
    );
};

export default NewTransaction;