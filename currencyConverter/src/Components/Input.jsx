import React from "react";

function Input({ options,selectedCurrency,changeCurrency }) {
  return (
    <>
      <input type="number" />
      <select value={selectedCurrency} onChange={changeCurrency}>
        {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
        }
      </select>
    </>
  );
}

export default Input;
