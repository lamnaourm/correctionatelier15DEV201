import { createSlice } from "@reduxjs/toolkit";


const BudgetSlice = createSlice({
    name:'budget',
    initialState:{
        budget:0,
        depenses: []
    },
    reducers: {}
})

export default BudgetSlice.reducer