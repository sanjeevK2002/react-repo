import { React, useState } from 'react';
import 'tailwindcss/tailwind.css';
import {evaluate} from 'mathjs'

const App = () => {
  const [input, setInput] = useState('0');
  const [lastOperation, setLastOperation] = useState('');

  const typeButton = (e) => {
    if (e === 'C') {
      setInput('0');
      setLastOperation('');
    } else if (e === '<') {
      setInput(input.length > 1 ? input.slice(0, -1) : '0');
    } else if (e === '=') {
      try {
        setInput(evaluate(input).toString());
        setLastOperation('=');
      } catch (error) {
        setInput('Error');
        setLastOperation('');
      }
    } else {
      if (lastOperation === '=') {
        setInput(e !== '.' ? e : '0' + e);
      } else {
        setInput((prev) => (prev === '0' && e !== '.' ? e : prev + e));
      }
      setLastOperation(e);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-slate-200'>
      <div className='w-80 p-4 bg-white rounded shadow-lg '>
        <div className='bg-slate-100 border pr-2  text-right font-bold text-3xl'>{input}</div>
        <div className='mt-3 border px-2 grid  grid-cols-4 gap-2'>
          <button onClick={() => typeButton('C')} className='bg-red-500 rounded mt-1 text-white shadow-lg'>C</button>
          <button onClick={() => typeButton('<')} className='bg-yellow-300 mt-1 rounded shadow-lg'>&lt;</button>
          <button onClick={() => typeButton('/')} className='bg-slate-100 mt-1 rounded shadow-lg'>/</button>
          <button onClick={() => typeButton('-')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>-</button>

          <button onClick={() => typeButton('7')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>7</button>
          <button onClick={() => typeButton('8')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>8</button>
          <button onClick={() => typeButton('9')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>9</button>
          <button onClick={() => typeButton('*')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>*</button>

          <button onClick={() => typeButton('4')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>4</button>
          <button onClick={() => typeButton('5')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>5</button>
          <button onClick={() => typeButton('6')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>6</button>
          <button onClick={() => typeButton('%')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>%</button>

          <button onClick={() => typeButton('1')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>1</button>
          <button onClick={() => typeButton('2')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>2</button>
          <button onClick={() => typeButton('3')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg'>3</button>
          <button onClick={() => typeButton('+')} className='bg-green-300 rounded mt-1 text-2xl shadow-lg row-span-2 mb-2'>+</button>

          <button onClick={() => typeButton('0')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg mb-2'>0</button>
          <button onClick={() => typeButton('.')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg mb-2'>.</button>
          <button onClick={() => typeButton('=')} className='bg-gray-200 rounded mt-1 text-2xl shadow-lg mb-2'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
