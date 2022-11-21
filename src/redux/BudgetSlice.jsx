import { createSlice } from "@reduxjs/toolkit";


const BudgetSlice = createSlice({
    name:'budget',
    initialState:{
        budget:25000,
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
    reducers: {
        addbudget:(state, action) => {
            state.budget += parseFloat(action.payload);
        },
        adddepense:(state, action) => {
            state.lastid++;
            state.depenses = [...state.depenses, {...action.payload, id:state.lastid}]
        },
    }
})


export const {addbudget, adddepense} = BudgetSlice.actions
export default BudgetSlice.reducer