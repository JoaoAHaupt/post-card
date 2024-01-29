import React from "react";
import './styles.css';

export const GoButton = ({ text, onClick, disabled = false }) => {
  return (
    <div className="button-container">
      <button className="gobutton" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};
