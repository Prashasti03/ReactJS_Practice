import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function Summary() {
  const { expenses } = useContext(ExpenseContext);

  const totalAmount = expenses.reduce(
    (total, exp) => total + exp.amount,
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map(exp => exp.amount))
      : 0;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Expenses: {expenses.length}</p>
      <p>Total Amount Spent: ₹ {totalAmount}</p>
      <p>Highest Expense: ₹ {highestExpense}</p>
    </div>
  );
}

export default Summary;