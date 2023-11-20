import "./App.css";
import { useEffect, useState } from "react";
import Input from "./Components/Input";

function App() {
  const [options, setOptions] = useState([]);

  console.log(options);
  const [fromcurrency,setFromcurrency]=useState();
  const [tocurrency,setTocurrency] =useState();


  useEffect(() => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=4f53661d34d3c7f844c845c5fc197e36"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Process the data
        console.log(data);
        const currency=[...Object.keys(data.rates)]
        setOptions(currency);
        setFromcurrency(data.base);
        setTocurrency(currency[0])

      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">
        <Input options={options} selectedCurrency={fromcurrency} changeCurrency={(e)=> setFromcurrency(e.target.value)}></Input>
        <div>=</div>
        <Input options={options} selectedCurrency={tocurrency} changeCurrency={(e)=> setTocurrency(e.target.value)}></Input>
      </h1>
    </>
  );
}

export default App;
