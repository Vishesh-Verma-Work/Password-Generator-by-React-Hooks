import React, { useCallback, useState } from 'react';

function Pass() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")


  const passGen = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (num) {
      str += "012345678"
    }

    if (num) {
      str += "!@#$%&){}:/."
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    console.log(str.length);
    console.log("Bhadu");
    setPassword(pass)

  }, [length, num, char, setPassword]);




  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-6 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow-lg rounde-lg overflow-hidden mb-4 rounded-lg'>

          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            readOnly
            placeholder='Password'
          />
          <button
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
            <input type="check-box"
              defaultChecked={num}
              value={length}
              id='numInp'
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label>Length : {length}</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default Pass
