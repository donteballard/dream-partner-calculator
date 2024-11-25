import React, { useState } from 'react';
import './App.css';

function App() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(25);
  const [race, setRace] = useState('any');
  const [minHeight, setMinHeight] = useState(0);
  const [minIncome, setMinIncome] = useState(0);
  const [excludeMarried, setExcludeMarried] = useState(false);
  const [excludeObese, setExcludeObese] = useState(false);
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    // This is where you would normally make an API call to get the actual percentage
    // For this example, we'll just use a random number
    setPercentage(Math.random() * 100);
  };

  return (
    <div className="App">
      <h1>Dream Partner Calculator</h1>
      <p className="context">
        What are the chances to find the man or woman of my dreams?<br />
        Live search using surveys conducted by US Census Bureau and NCHS.
      </p>
      
      <div className="calculator">
        <div className="group-box">
          <h2>Gender</h2>
          <label>
            <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
            Male
          </label>
          <label>
            <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            Female
          </label>
        </div>

        <div className="group-box">
          <h2>Age</h2>
          <input type="range" min="18" max="99" value={age} onChange={(e) => setAge(e.target.value)} />
          <span>{age} years</span>
        </div>

        <div className="group-box">
          <h2>Race</h2>
          {['any', 'asian', 'black', 'hispanic', 'white'].map((r) => (
            <label key={r}>
              <input type="radio" value={r} checked={race === r} onChange={() => setRace(r)} />
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </label>
          ))}
        </div>

        <div className="group-box">
          <h2>Minimum Height</h2>
          <input type="range" min="0" max="84" value={minHeight} onChange={(e) => setMinHeight(e.target.value)} />
          <span>{minHeight === '0' ? 'Any' : `${Math.floor(minHeight / 12)}'${minHeight % 12}"`}</span>
        </div>

        <div className="group-box">
          <h2>Minimum Income</h2>
          <input type="range" min="0" max="500000" step="10000" value={minIncome} onChange={(e) => setMinIncome(e.target.value)} />
          <span>{minIncome === '0' ? 'Any' : `$${parseInt(minIncome).toLocaleString()}`}</span>
        </div>

        <div className="group-box">
          <h2>Other Options</h2>
          <label>
            <input type="checkbox" checked={excludeMarried} onChange={() => setExcludeMarried(!excludeMarried)} />
            Exclude Married
          </label>
          <label>
            <input type="checkbox" checked={excludeObese} onChange={() => setExcludeObese(!excludeObese)} />
            Exclude Obese
          </label>
        </div>
      </div>

      <div className="calculate-button">
        <button onClick={calculatePercentage}>Calculate Chances</button>
      </div>

      {percentage !== null && (
        <div className="result">
          <h2>Your Chances</h2>
          <p>{percentage.toFixed(2)}%</p>
        </div>
      )}

      <footer>
        <p>
          The Dream Partner Calculator processes statistical data from two sources.<br />
          Income and marital status information is derived from the latest Annual Social and Economic Supplement (ASEC) of the Current Population Survey (CPS) conducted by the Census Bureau of United States.<br />
          Height and body mass index is derived from the latest National Health and Nutrition Examination Survey (NHANES) conducted by the National Center for Health Statistics (NCHS).
        </p>
      </footer>
    </div>
  );
}

export default App;
