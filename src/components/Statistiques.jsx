import React from 'react';
import { FaMoneyBill, FaBalanceScaleRight } from 'react-icons/fa';
import { SiExpensify } from 'react-icons/si';
import { useSelector } from 'react-redux';

const Statistiques = () => {

    const budget = useSelector(state => state.budget);
    const mdepenses = useSelector(state => state.depenses).reduce((sum,item) => sum+= item.montant, 0);

    return (
        <div className='statistique'>
            <div className='budget'>
                <FaMoneyBill />
                <p>BUDGET : {budget}</p>
            </div>
            <div className='depense'>
                <SiExpensify />
                <p>DEPENSES : {mdepenses}</p>
            </div>
            <div className='ecart'>
                <FaBalanceScaleRight />
                <p>ECART : {budget-mdepenses}</p>
            </div>

        </div>
    );
}

export default Statistiques;
