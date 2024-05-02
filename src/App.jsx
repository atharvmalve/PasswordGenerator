import { useState,useCallback } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const[length,setLength]=useState(0);
  const[isNum,setIsNum]=useState(false);
  const[isChar,setIsChar]=useState(false);
  const[password,setPassword]=useState("");

  const passwordSetter=useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(isNum) str+="1234567890";
      if(isChar) str+="!@#$%&*()+";
      for(let i=0;i<length;i++){
        let lengthSet = Math.floor((Math.random()*(str.length-1))+1);
        pass+=str[lengthSet];
      }
      setPassword(pass);
  },[length,isChar,isNum,setPassword]);

  const passwordRef= useRef();

  const Copyfn=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className='w-full h-screen bg-black m-0 flex justify-center'>
      <div className='flex justify-center  align-middle flex-col bg-slate-900 w-11/12 h-2/6 rounded-xl mt-10'> 
        <div className='flex justify-center mb-4 mt-0 '>
          <h1 className='text-white font-bold text-auto'>PASSWORD GENERATOR</h1>
        </div>
        <div className='flex justify-center mb-5'>
            <input
              type='text'
              value={password}
              readOnly
              placeholder={password}
              onChange={passwordSetter}
              ref={passwordRef}
              className='w-10/12 py-1 px-3 mx-2 rounded-md'>
            </input>
            <button 
              className='px-3 
              py-2
              bg-red-800 
              text-white
              rounded-md
              text-lg
              hover:bg-red-900
              mx-2
              ' 
              onClick={Copyfn}>Copy
            </button>
        </div>
        <div className='flex justify-center mb-3 flex-wrap'>
          <div>
            <input 
                type='range' 
                min={0} 
                max={100} 
                value={length}
                onChange={(e)=>setLength(e.target.value)}
                className='w-fit mx-2'>
              </input>
            <label className='text-white mr-2 text-sm'>Length: {length}</label>
          </div>
          <div>
            <input
                type='checkbox'
                placeholder='Number'
                value={isNum}
                onChange={()=>{
                  setIsNum((prev)=>(!prev))
                }}
                className='mr-1 ml-4'>
            </input>
            <label className='text-white text-sm'>Number</label>
          </div>
          <div>
            <input
                type='checkbox'
                placeholder='Number'
                value={isChar}
                onChange={()=>{
                  setIsChar((prev)=>(!prev))
                }}
                className='mr-1 ml-4'>
            </input>
            <label className='text-white'>Character</label>
          </div>

        </div>
        <div className='flex justify-center items-center '>
          <button onClick={passwordSetter} className=' size-fit px-3 rounded-md text-lg bg-green-600 text-white hover:bg-green-800'>Generate</button>
        </div>
      </div>

    </div>
  )
}

export default App
