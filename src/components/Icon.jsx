import React from "react";

function Icon({ step, text, activeStep }) {
  const bgColorClass =
    activeStep === parseInt(step)
      ? "bg-slate-50 text-marineBlue"
      : "text-white";
  return (
    <>
      <div
        className={`rounded-full w-10 h-10 border-2  flex justify-center items-center ${bgColorClass}`}
      >
        <p className="font-bold text-lg">{step}</p>
      </div>
      <div className="hidden md:block">
        <h2 className="text-gray-300">STEP {step}</h2>
        <p className="font-bold text-slate-50">{text}</p>
      </div>
    </>
  );
}

export default Icon;
