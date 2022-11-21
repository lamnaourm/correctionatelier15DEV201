import React, { useState } from "react";
import { GrFormAdd } from 'react-icons/gr';
import { useDispatch } from "react-redux";
import { addbudget } from "../redux/BudgetSlice";

const AddBudget = () => {

    const dispatch = useDispatch();
    const [budget, setBudget] = useState(0)
  return (
    <div className="addBudget">
      <input type="number" placeholder="Saisir votre budget..." value={budget} onChange={(e) => setBudget(e.target.value)} />
      <button onClick={() => dispatch(addbudget(budget))}>
        <GrFormAdd /> Ajouter budget
      </button>
    </div>
  );
};

export default AddBudget;
