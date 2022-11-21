import { configureStore } from "@reduxjs/toolkit";
import BudgetReducer from "./BudgetSlice";

const store = configureStore({reducer: BudgetReducer})

export default store