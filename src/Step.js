import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Location from "./components/steps/Location";
import Genre from "./components/steps/Genre";
import Poster from "./components/steps/Poster";
import Final from "./components/steps/Final";

import Header from './Header'; 
import Footer from './Footer'; 

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "동네 선택",
    "장르 선택",
    "포스터 선택",
    "AI 추천",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Location />;
      case 2:
        return <Genre />;
      case 3:
        return <Poster />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
    <Header />
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
    <Footer />
    </>
  );
}

export default App;
