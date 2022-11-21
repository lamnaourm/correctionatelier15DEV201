import React from 'react';
import { GrFormAdd } from 'react-icons/gr';


const AddDepense = () => {
    return (
        <div className='addBudget'>
            <input type="number" placeholder='description depense...'/>
            <input type="number" placeholder='montant depense...'/>
            <button><GrFormAdd/> Ajouter Depense</button>
        </div>
    );
}

export default AddDepense;
