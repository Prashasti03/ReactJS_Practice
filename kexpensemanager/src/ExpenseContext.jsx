import { createContext, useEffect, useReducer } from "react";

export const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
    switch (action.type){
        case "ADD_EXPENSE":
            return [...state, action.payload];
        
        case "DELETE_EXPENSE":
            return state.filter(exp => exp.id !== action.payload);

        default:
            return state;
    }
}

export const ExpenseProvider = ({children}) =>{
    const [expenses, dispatch] = useReducer(expenseReducer, []);

    useEffect(() => {
        console.log("Expense Updated:", expenses);
    }, [expenses]);

    return (
        <ExpenseContext.Provider value={{expenses, dispatch}}>
            {children}
        </ExpenseContext.Provider>
    )
}