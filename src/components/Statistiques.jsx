import React from 'react';
import { FaMoneyBill, FaBalanceScaleRight } from 'react-icons/fa';
import { SiExpensify } from 'react-icons/si';

const Statistiques = () => {
    return (
        <div className='statistique'>
            <div className='budget'>
                <FaMoneyBill />
                <p>BUDGET : {0}</p>
            </div>
            <div className='depense'>
                <SiExpensify />
                <p>DEPENSES : {0}</p>
            </div>
            <div className='ecart'>
                <FaBalanceScaleRight />
                <p>ECART : {0}</p>
            </div>

        </div>
    );
}

export default Statistiques;
