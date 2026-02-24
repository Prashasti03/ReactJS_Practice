import { useState, useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";
import { useNavigate } from "react-router-dom";

function AddExpense() {
  const { dispatch } = useContext(ExpenseContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, amount, category, date } = formData;

    if (!title || !amount || !category || !date) {
      alert("All fields are required!");
      return;
    }

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
        date
      }
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" onChange={handleChange} />

      <select name="category" onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
      </select>

      <input name="date" type="date" onChange={handleChange} />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;