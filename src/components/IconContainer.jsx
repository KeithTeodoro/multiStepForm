import React from "react";
import Icon from "./Icon";
import IconStep from "./IconStep";
function IconContainer({ activeStep }) {
  return (
    <div className="flex gap-4 md:gap-6 justify-center py-8 md:flex-col">
      <IconStep>
        <Icon step="1" activeStep={activeStep} text="YOUR INFO" />
      </IconStep>
      <IconStep>
        <Icon step="2" activeStep={activeStep} text="SELECT PLAN" />
      </IconStep>
      <IconStep>
        <Icon step="3" activeStep={activeStep} text="ADD-ONS" />
      </IconStep>
      <IconStep>
        <Icon step="4" activeStep={activeStep} text="SUMMARY" />
      </IconStep>
    </div>
  );
}

export default IconContainer;
