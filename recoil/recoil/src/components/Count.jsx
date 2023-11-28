import React from 'react'
import { countState } from '../App'
import {useRecoilValue} from 'recoil'

function Count(props) {
  const count=useRecoilValue(countState)
  return (
    <div>{count}</div>
  )
}

export default Count