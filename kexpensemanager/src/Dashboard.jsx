import { useContext, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

function Dashboard() {
  const { expenses, dispatch } = useContext(ExpenseContext);
  const [filter, setFilter] = useState("All");

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter(exp => exp.category === filter);

  return (
    <div>
      <h2>All Expenses</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
      </select>

      {filteredExpenses.length === 0 ? (
        <p>No Expenses Added</p>
      ) : (
        filteredExpenses.map(exp => (
          <div key={exp.id}>
            <h4>{exp.title}</h4>
            <p>₹ {exp.amount}</p>
            <p>{exp.category}</p>
            <p>{exp.date}</p>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_EXPENSE", payload: exp.id })
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;