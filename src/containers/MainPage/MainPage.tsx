import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useCallback, useEffect} from "react";
import Transaction from "../../components/Transaction/Transaction.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";
import {deleteTransaction, fetchTransactions} from "../../store/thunks/transactionThunk.ts";

const MainPage = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.transaction.isLoading);
    const transactions = useAppSelector((state) => state.transaction.transaction);

    const fetchingTransactions = useCallback(async () => {
        await dispatch(fetchTransactions());
    }, [dispatch]);

    useEffect(() => {
        void fetchingTransactions()
    }, [fetchingTransactions]);

    const handleDeleteTransaction = useCallback(async(transactionId: string) => {
        await dispatch(deleteTransaction(transactionId));
        await fetchingTransactions()
    }, [fetchingTransactions])

    const totalAmount = transactions.reduce((acc, transaction) => {
        acc = acc + transaction.amount
        return acc
    }, 0);


    return (
        <>
            {loading ? <Spinner/>
                :
                <>
                <header>
                    <h1>Total: {totalAmount}</h1>
                    </header>
                <div className='row'>

                    <div className='col'>
                        {transactions.length > 0 ? (
                            <Transaction transactions={transactions} deletedTransaction={handleDeleteTransaction}/>
                        ) : (
                            <p>No Transactions yet</p>
                        )}
                    </div>
                </div>
                </>
            }

        </>
    );
};

export default MainPage;