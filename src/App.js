import './App.css';
import Header from './components/Header';
import Statistiques from './components/Statistiques';
import ListDepenses from './components/ListDepenses';
import AddBudget from './components/AddBudget';
import AddDepense from './components/AddDepense';

function App() {
  return (
    <div>
      <Header />
      <Statistiques />
      <div className='content'>
        <div className='saisie'>
          <AddBudget />
          <AddDepense />
        </div>
        <ListDepenses />
      </div>
    </div>
  );
}

export default App;
