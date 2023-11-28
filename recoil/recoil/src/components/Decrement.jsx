import React from 'react'
import { countState } from '../App'
import { useSetRecoilState } from 'recoil'


function Decrement() {
  const setCount=useSetRecoilState(countState)
  return (
    <>
    <button onClick={()=>{
     setCount(count=>count-1)
    }}>Decrement</button>
    </>
  )
}

export default Decrement