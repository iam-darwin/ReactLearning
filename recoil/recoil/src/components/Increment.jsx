import React from 'react'
import { countState } from '../App'
import { useSetRecoilState } from 'recoil'

function Increment(props) {
  const setCount=useSetRecoilState(countState);
  return (
    <>
    <button onClick={()=>{
     setCount(count=>count+1)
    }}>Increment</button>
    </>
  )
}

export default Increment