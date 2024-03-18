import React from "react";

function Button({ children, nextStep }) {
  return (
    <button
      className="bg-slate-800 text-white px-4 py-3 rounded-md"
      onClick={nextStep}
    >
      {children}
    </button>
  );
}

export default Button;
