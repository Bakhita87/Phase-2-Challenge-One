import React, { useState } from "react";
import './SearchBar.css'

function SearchBar({transactions,setTransactions,mainTransactions}){
    function handleonChange(event){
        const searchItem = event.target.value
      const filterData = transactions.filter((transaction)=>{

        return transaction.description.includes(searchItem)
      })
      if(searchItem){
        setTransactions(filterData)
      } else {
        setTransactions(mainTransactions)
      }
    
    }
    return(
        <div className="search-bar">
            <input type="text" onChange={handleonChange} placeholder="Search your recent transactions..." ></input>
        </div>   
    )      
                    
   
    

    
}

export default SearchBar;