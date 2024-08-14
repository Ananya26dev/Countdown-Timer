import React from "react";

const InputTimer = ({handleInput,handleStart}) => {
  return (
    <div className="input-container">
      <div className="input-box">
        <input onChange={handleInput} type="text" id="hours" placeholder="HH" />
        <input
          type="text"
          id="minutes"
          placeholder="MM"
          onChange={handleInput}
        />
        <input
          type="text"
          id="seconds"
          placeholder="SS"
          onChange={handleInput}
        />
      </div>
      <button onClick={handleStart} className="timer-button">
        Start
      </button>
    </div>
  );
};

export default InputTimer;
