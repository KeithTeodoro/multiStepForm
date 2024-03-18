import React from "react";
import Input from "./Input";
function SecondStepComponent() {
  return (
    <>
      <h2 className="text-3xl lg:text-4xl font-bold text-marineBlue">
        Personal Info
      </h2>
      <p className="text-lg text-gray-500">
        Please provide your name, email, address, and phone number.
      </p>
      <div className="flex flex-col gap-7">
        <Input placeholder="e.g StephenKing@lorem.com" label="Email Address" />
        <Input placeholder="e.g Stephen King" label="Name" />

        <Input placeholder="e.g +63 123 4567 890" label="Phone Number" />
      </div>
    </>
  );
}

export default SecondStepComponent;
