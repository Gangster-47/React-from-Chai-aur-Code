import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword]=useState("");
  
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrtsuvwxyz";

    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="@#$%&~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator]);


  const copyPasswordToClipboard = useCallback(()=>
  {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password]);


  // useEffect(()=>{
  //   let pass="";
  //   let str="ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrtsuvwxyz";

  //   if(numberAllowed) str+="0123456789";
  //   if(charAllowed) str+="@#$%&~{}()+*";

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random()*str.length+1);
  //     pass+=str.charAt(char);
  //   }

  //   setPassword(pass);
  // },[length,numberAllowed,charAllowed]);

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
      <h2 className='text-3xl my-4 text-center text-white mt-6'>Password Generator</h2>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly 
        ref={passwordRef}
      />
      <button 
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'
      onClick={copyPasswordToClipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={5}
        max={30}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{setCharAllowed((prev)=>!prev)}} />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
