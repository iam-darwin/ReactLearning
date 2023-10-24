
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [password,setPassword]=useState("");
  let [number,setNumber]=useState(false);
  let [chars,setChars]=useState(false);
  let [length,setLength]=useState(8);

  const pwdGen=()=>{
    let pwd="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (chars) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pwd += str.charAt(char)
      
    }
    setPassword(pwd);
  }

  useEffect(()=>{
    pwdGen();
  },[number,chars,length,setPassword])

  return(
  <>
    <h1>Password generator</h1>
    <input type="text" value={password}/> <label>Password</label>
    <br />
    <input type="range" min="8" max="100" onChange={(e)=>setLength(e.target.value)} /><label>{length}</label>
    <br />
    <input type="checkbox" id="myCheckbox" name="myCheckbox" onChange={()=>setNumber(!number)}></input>
    <label for="myCheckbox">Numbers</label>
    <br />
    <input type="checkbox" id="myCheckbox" name="myCheckbox" onChange={()=>setChars(!chars)}></input>
    <label for="myCheckbox">Charas</label>
  </>
    
  )
}

export default App
