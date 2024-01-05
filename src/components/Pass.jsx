import React, { useCallback, useState,  useEffect, useRef } from 'react';

function Pass() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")


  const passGen = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (num) {
      str += "0123456789";
    }

    if (char) {
      str += "!@#$%&){}:/.";
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, num, char, setPassword]);


useEffect(()=> {
  passGen();
}, [length, num, char, passGen]) // jitni bhi dep. saath changes honge, ye re-run hoga

const passCopy = useCallback(()=> {
  passRef.current?.select()
  passRef.current?.setSelectionRange(0,24 )
  window.navigator.clipboard.writeText(password)
}, [password])

const passRef = useRef(null)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 mt-8 py-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow-lg rounde-lg overflow-hidden mb-4 rounded-lg'>

          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            readOnly
            placeholder='Password'
            ref={passRef}
          />
          <button
          onClick={passCopy}
            className='outline-none bg-blue-700 text-white px-3 py-.5 shrink-0'
          >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={5}
              max={24}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={num}
              id='numInp'
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor='numInp'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={char}
              id='charInp'
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor='charInp'>Characters</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default Pass
