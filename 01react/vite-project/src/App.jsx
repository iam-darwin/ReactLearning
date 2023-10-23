import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

export default function App() {
  let [counter, setCounter] = useState(1);

  function addUp() {
    counter++;
    setCounter(counter);
  }

  function keepDown() {
    counter--;
    setCounter(counter);
  }

  return (
    <>
      <h1 className="text-3xl font-bold bg-white text-white">{counter}</h1>
      <button className="mb-12" onClick={addUp}>
        Increase
      </button>
      <br />
      <button className="mt-12" onClick={keepDown}>
        Decrease
      </button>

      <Card name={"joey"} headline={"This a nice spider"}/>
      <Card name={"chandler"} headline={"This a nice spyder"}/>
      <Card name={"ross"} headline={"This a nice spiiiider"}/>
      <Card name={"mike"} headline={"This a nice pheobe"}/>

    </>
  );
}
