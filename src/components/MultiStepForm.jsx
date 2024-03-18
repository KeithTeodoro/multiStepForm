import React from "react";
import IconContainer from "./IconContainer";
import FirstStepComponent from "./FirstStepComponent";
import Button from "./Button";

import bgDesktop from "../assets/bg-sidebar-desktop.svg";
import SecondStepComponent from "./SecondStepComponent";

function MultiStepForm({ step, setData, nextStep }) {
  return (
    <div className="h-full w-full lg:w-6/12 md:p-8 bg-white rounded-xl">
      <div className="bg-[url('/src/assets/bg-sidebar-mobile.svg')] md:bg-none bg-no-repeat h-44 md:h-full w-full bg-cover flex flex-col md:flex-row md:justify-between">
        <div className="md:hidden">
          <IconContainer activeStep={step} />
        </div>
        <div className="relative hidden md:block">
          <img src={bgDesktop} alt="Background Image" />
          <div className="absolute top-0 left-5">
            <IconContainer activeStep={step} />
          </div>
        </div>

        <div className="flex flex-col justify-center md:justify-between items-center md:px-10 md:py-8">
          <div className="w-11/12 md:w-full bg-white md:bg-inherit p-8 md:p-0  rounded-md md:rounded-none">
            <div className=" rounded-lg flex flex-col gap-5 mb-5">
              {step === 1 && <FirstStepComponent />}
              {step === 2 && <SecondStepComponent />}
            </div>
          </div>
          <div className="w-full flex justify-end bg-white p-5 md:bg-inherit md:p-0 absolute md:static bottom-0">
            <Button nextStep={nextStep}>Next Step</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
