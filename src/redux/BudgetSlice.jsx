import { createSlice } from "@reduxjs/toolkit";


const BudgetSlice = createSlice({
    name:'budget',
    initialState:{
        budget:2500,
        lastid:3,
        depenses: [
            {
                id:1,
                description: 'Diesel Voiture',
                montant:800
            },
            {
                id:2,
                description: 'Achat PC',
                montant:8000
            },
            {
                id:3,
                description: 'Achat Cartable',
                montant:450
            },
        ]
    },
    reducers: {}
})

export default BudgetSlice.reducer