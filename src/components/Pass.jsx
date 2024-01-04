import React, { useCallback,useCallback } from 'react'

function Pass() {
    const [length, setLength] = useState(8)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false)

    const [password, setPassword] = useCallback(() => {
      let pass = ""
      let str = ""

      

      }, [length,num,char,setPassword]);
    



  return (
    <>
    <h1 className='bg-black text-cyan-400 py-3 text-center'>hello bhai kaise hoo aap</h1>
    
    </>
  )
}

export default Pass
