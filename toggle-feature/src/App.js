
import { useState } from 'react';
import 'tailwindcss/tailwind.css'

function App() {
  const [input,setInput]=useState("Hii I am sanjeev paswan");

  const sbbutton=()=>{
    let val= input;
       val==='Hii I am sanjeev paswan'?setInput("I am also a full stack developer"):setInput('Hii I am sanjeev paswan');
  }
  return (
   <div className='flex flex-col justify-center items-center min-h-screen bg-slate-300'>
    <section className='w-70 p-5 bg-slate-500 rounded-lg items-center'>
    <div className='bg-slate-200 p-2 flex flex-col items-center rounded-lg'>
    <h1 className='font-bold '>{input}</h1>
    <button onClick={sbbutton} className='bg-green-500 rounded-full px-2 mt-3 text-white'>Know About Me</button>
    </div>
    </section>

   </div>
  );
}

export default App;
