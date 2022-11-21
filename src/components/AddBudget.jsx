import React from "react";
import { GrFormAdd } from 'react-icons/gr';

const AddBudget = () => {
  return (
    <div className="addBudget">
      <input type="number" placeholder="Saisir votre budget..." />
      <button>
        <GrFormAdd /> Ajouter budget
      </button>
    </div>
  );
};

export default AddBudget;
