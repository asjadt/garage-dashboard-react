import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./MultiStepProgressBar.css";

const MultiStepProgressBar = props => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div className="d-flex flex-column align-items-center pt-4 justify-content-between">

            <div className={`indexedStep ${accomplished ? "accomplished" : `text-dark`}`}  >
              {index + 1}
            </div>
            <span className={`${accomplished ? 'text-primary' : 'text-dark'}  mt-2 text-center text-center fw-bold`}>User Info</span>
          </div>
        )}
      </Step>
      <Step>

        {({ accomplished, index }) => (
          <div className="d-flex flex-column align-items-center pt-4 justify-content-between">

            <div className={`indexedStep ${accomplished ? "accomplished" : `text-dark`}`}  >
              {index + 1}
            </div>
            <span className={`${accomplished ? 'text-primary' : 'text-dark'}  mt-2 text-center fw-bold`}>Garage Info</span>
          </div>
        )}

      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className="d-flex flex-column align-items-center pt-4 justify-content-between">
            <div className={`indexedStep ${accomplished ? "accomplished" : `text-dark`}`}  >
              {index + 1}
            </div>
            <span className={`${accomplished ? 'text-primary' : 'text-dark'} mt-2 text-center fw-bold`}>Services</span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
