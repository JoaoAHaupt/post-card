import React from "react";
import '.'

export const BackButton = ({ text, onClick, disabled = false }) => {
  return (
    <div className="button-container">
      <button className="backbutton" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};
