import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <th>{type}</th>
              <th>{amount}</th>
              <th>{currency}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
