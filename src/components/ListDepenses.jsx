import React from 'react';
import { useSelector } from 'react-redux';

const ListDepenses = () => {
    const listdepenses = useSelector(state => state.depenses);

    return (
        <div className='list'>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Montant</th>
                </tr>
                
                {
                    listdepenses.map(item =>  <tr>
                        <td>{item.description}</td>
                        <td>{item.montant}</td>
                    </tr> )
                }

            </table>
        </div>
    );
}

export default ListDepenses;
