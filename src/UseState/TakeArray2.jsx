import React, { useState } from 'react';

const TakeArray2 = ({ country }) => {
  const [countries, setCountries] = useState(country);

  const handleEdit = (index) => {
    const newCountryName = prompt("Enter new country name:", countries[index]);
    if (newCountryName) {
      const newCountries = [...countries];
      newCountries[index] = newCountryName;
      setCountries(newCountries);
    }
  };

  const handleRemove = (index) => {
    const newCountries = countries.filter((_, i) => i !== index);
    setCountries(newCountries);
  };

  return (
    <div>
      {countries.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
          <button onClick={() => handleEdit(index)}>edit</button>
          <button onClick={() => handleRemove(index)}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default TakeArray2;
