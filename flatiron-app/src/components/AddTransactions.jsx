import React, { useState } from "react";
import './AddTransactions.css'


function AddTransactions() {
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  
  function handleSubmit(e) {
    
    
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    })


     
    alert("Transaction successful")
  }
  return (
    <div className="main-data">
      <form onSubmit={handleSubmit} className="form-data">
      <div className="input-data">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="digit" placeholder="Amount" step="0.01" />
      </div>
        <button >Add Transaction</button>
      </form>
  </div>
  );

  }

export default AddTransactions;