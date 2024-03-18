import { useState } from "react";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    inputOne: "",
    inputTwo: "",
  });

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  return (
    <div className="min-h-screen bg-backgroundColor overflow-y-auto flex md:justify-center md:items-center  relative">
      <MultiStepForm step={step} setData={setData} nextStep={nextStep} />
    </div>
  );
}

export default App;
