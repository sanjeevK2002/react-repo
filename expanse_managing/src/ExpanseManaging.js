import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './style.css'

const ExpanseManaging = () => {
    const [input,setInput]=useState();
    const [amount,setAmount]=useState();
    const [Expanse,setExpanse]=useState([]);
    const addExpance=()=>{
        if (!input || ! amount) {
            return;
        }
        const newExpance={
            id:Expanse.length + 1,
            title:input,
            amount:amount
        };
        setExpanse([...Expanse,newExpance])
        setInput('')
        setAmount('')
    }
    
     const deleteExpense=(id)=>{
        setExpanse(Expanse.filter((Expanse)=>Expanse.id!==id))
     }

  return (
    <div className='main'>
        <div className='inner'>
            <h1>Expanse Tracker</h1>
        <input type="text" placeholder='items'
         onChange={(e)=>{
            setInput(e.target.value)}
            }
            value={input}
            />
        <input type="number" placeholder='Cost'
        onChange={
            (e)=>setAmount(e.target.value)
        }
        value={amount}
        />
        <button onClick={addExpance}>Add Expanse</button>
        <ul className='Expanse-List'>
           {
            Expanse.map((exp)=>(
                <li key={exp.id}>
                    <span>{exp.title}</span>
                    <span>{exp.amount}</span>
                    <i onClick={() => deleteExpense(exp.id)} className="ri-delete-bin-6-line"></i>

                </li>
            ))
           }
        </ul>
        </div>
    </div>
  )
}

export default ExpanseManaging