"use client";
import { useState } from "react";
import "../../styles/calculator.css";

export default function Calculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [coverage, setCoverage] = useState("");
  const [result, setResult] = useState("");
  const [value, setValue] = useState(null);

  const handleClick = (newValue) => {
    setValue(newValue);
    onChange?.(newValue);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Determine base rate by gender
  const baseRate = gender === "male" ? 0.02 : 0.018;

  // Tobacco factor
  const tobaccoFactor = value === true ? 1.5 : 1;

  // Calculate premium
  const premium = Number(age) * Number(coverage) * baseRate * tobaccoFactor;

  setResult(`Estimated Premium: ₹${premium.toFixed(2)}`);
};


  return (
    <div className="form-container">
      <h2>Health Insurance Calculator</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>

        <div className="gender-group">
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <label>
          Tobacco Usage:
          <button
            onClick={() => handleClick(true)}
            style={{
              backgroundColor: value === true ? "gray" : "lightgray",
              color: value === true ? "white" : "black",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => handleClick(false)}
            style={{
              backgroundColor: value === false ? "gray" : "lightgray",
              color: value === false ? "white" : "black",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            No
          </button>
        </label>

        <label>
          Coverage Amount:
          <input
            type="number"
            value={coverage}
            onChange={(e) => setCoverage(e.target.value)}
            required
          />
        </label>

        <button type="submit">Calculate</button>

        {result && <p className="result">{result}</p>}
      </form>
    </div>
  );
}
