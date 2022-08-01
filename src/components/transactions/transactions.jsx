import React from "react";
import "./transactions.scss"

export const Transactions = ({transactions}) => {
    return (
      <section className="section-transaction-history">
        <table className="transaction-history">
          <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <th>{transaction.type}</th>
                <th>{transaction.amount}</th>
                <th>{transaction.currency}</th>
              </tr>
            ))}
          </thead>
        </table>
      </section>
    );
    };