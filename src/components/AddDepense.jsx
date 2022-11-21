import React, { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { adddepense } from '../redux/BudgetSlice';


const AddDepense = () => {
    const dispatch = useDispatch();
    const [des, setDes] = useState('')
    const [montant, setMontant] = useState(0)

    return (
        <div className='addBudget'>
            <input type="text" placeholder='description depense...' value={des} onChange={(e) => setDes(e.target.value)}/>
            <input type="number" placeholder='montant depense...' value={montant} onChange={(e) => setMontant(e.target.value)}/>
            <button onClick={() => dispatch(adddepense({description:des, montant:parseFloat(montant)}))}><GrFormAdd/> Ajouter Depense</button>
        </div>
    );
}

export default AddDepense;
