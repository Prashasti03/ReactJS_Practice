import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function Navbar() {
  const { expenses } = useContext(ExpenseContext);

  <NavLink
    to="/"
    style={({ isActive }) => ({
      color: isActive ? "red" : "black",
    })}
  >
    Dashboard
  </NavLink>;

  return (
    <nav>
      <NavLink to="/">Dashboard</NavLink> |{" "}
      <NavLink to="/add">Add Expense</NavLink> |{" "}
      <NavLink to="/summary">Summary</NavLink>
      <span style={{ marginLeft: "20px" }}>
        Total Expenses: {expenses.length}
      </span>
    </nav>
  );
}

export default Navbar;
