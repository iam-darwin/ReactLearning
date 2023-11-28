import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Count from './components/Count'
import {
  RecoilRoot,
  atom,
} from 'recoil';

function App() {

  return (
    <>
      <RecoilRoot>
        <Button ></Button>
        <br />
        <Count ></Count>
      </RecoilRoot>
    </>
  )
}

export const countState = atom({
  key: 'countState',
  default: 0,
});

export default App
