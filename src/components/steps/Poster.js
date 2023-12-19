import { useStepperContext } from "../../contexts/StepperContext";

export default function Poster() {
  const { userData, setUserData } = useStepperContext();

  const handleImageSelect = (region) => {
    // Toggle the selection status of the image
    setUserData({ ...userData, [region]: !userData[region] });
  };

  const regions = ['1', '2', '3', '4', '5', '6'];

  return (
    <div className="grid grid-cols-3 gap-4">
      {regions.map((region) => (
        <div key={region} className="mx-2 flex-1">
          <img
            src={`posters/${region}.jpg`} // Modified path
            alt={`Region ${region}`}
            onClick={() => handleImageSelect(region)}
            className={`cursor-pointer ${
              userData[region] ? "border-4 border-orange-500" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}
