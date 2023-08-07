import React, { useContext } from 'react';
import { Transaction } from './transaction';
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <u className="list">
                {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} />))}
            </u>
        </>
    )
}
