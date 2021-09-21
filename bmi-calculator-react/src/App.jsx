import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");
  const [weightRange, setWeightRange] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    let weightRangeStatus = getWeightRange(bmi);

    setWeightRange(weightRangeStatus);

    setHeight("");
    setWeight("");
  }

  function getWeightRange(bmi) {
    if (bmi < 18.5) return "20-45Kg";
    else if (bmi >= 18.5 && bmi < 24.9) return "46-60Kg";
    else if (bmi >= 25 && bmi < 29.9) return "61-85Kg";
    else return "85-100Kg";
  }
  function getStatus(bmi) {
    if (bmi < 18.5) return "nutritional deficiency";
    else if (bmi >= 18.5 && bmi < 24.9) return "healthy";
    else if (bmi >= 25 && bmi < 29.9) return "moderate risk ";
    else return "high risk";
  } 

  return (
    <div className="w-96 h-full m-40">
      <div className="bg-blue-500 w-96 h-14">
        <h1 className="text-center p-3.5 text-xl text-white font-semibold"> BMI Calculator</h1>
      </div>
      <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Enter your height in cm:
          </label>
          <input
            className="border border-black w-36 h-8 px-2 bg-blue-100"
            id="Height "
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Enter your weight in kg:
          </label>
          <input
            className="border border-black w-36 h-8 px-2 bg-blue-100"
            id="Weight"
            type="Weight in kg"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 w-36 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBMI}
          >
            Submit
          </button>
        </div>
        {bmiResult && (
          <div className="mt-4 border-2 border-red-600 rounded-lg p-5">
            <p>Your BMI is: {bmiResult} </p>
            <p>Your suggested weight range is between {weightRange}  </p>
            <p>You are in a {status} weight range</p>
          </div>
        )}
      </form>
    </div>
  );
}

