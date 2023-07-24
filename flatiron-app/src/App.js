import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Transactions from './components/AddTransactions';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[transactions,setTransactions] = useState([])
  const[mainTransactions,setMainTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
     .then(res => res.json())
     .then(data => {console.log(data)
        setTransactions(data)
        setMainTransactions(data)
     }
     )
  },[])

 

  return (
    
    
    <div className="App">
     
     <Header/> 
     <SearchBar transactions = {transactions} setTransactions = {setTransactions} mainTransactions = {mainTransactions}/>
     <Transactions/>  
     <table>
      <thead>
         <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
         </tr>
      </thead>
      <tbody>
        {
          transactions.map((transactions,i) =>(
            <tr key={i}>
              <td>{transactions.date}</td>
              <td>{transactions.description}</td>
              <td>{transactions.category}</td>
              <td>{transactions.amount}</td>

            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
    
  
  );
}

export default App;
