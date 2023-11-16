import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState(false);
  const [chars, setChars] = useState(false);
  const [length, setLength] = useState(8);
  const passwordInputRef = useRef(null);

  const pwdGen = () => {
    let pwd = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (number) str += '0123456789';
    if (chars) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pwd += str.charAt(char);
    }
    setPassword(pwd);
  };

  useEffect(() => {
    pwdGen();
  }, [number, chars, length]);

  const handleCopyClick = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <>
      <h1>Password generator</h1>
      <input
        type="text"
        value={password}
        ref={passwordInputRef}
      />
      <label>Password</label>
      <button onClick={handleCopyClick}>Copy</button>
      <br />
      <input
        type="range"
        min="8"
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <label>{length}</label>
      <br />
      <input
        type="checkbox"
        id="numbersCheckbox"
        name="numbersCheckbox"
        checked={number}
        onChange={() => setNumber(!number)}
      />
      <label htmlFor="numbersCheckbox">Numbers</label>
      <br />
      <input
        type="checkbox"
        id="charsCheckbox"
        name="charsCheckbox"
        checked={chars}
        onChange={() => setChars(!chars)}
      />
      <label htmlFor="charsCheckbox">Characters</label>
    </>
  );
}

export default App;
