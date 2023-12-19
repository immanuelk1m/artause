import { useStepperContext } from "../../contexts/StepperContext";

export default function Location() {
  const { userData, setUserData } = useStepperContext();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUserData({ ...userData, [name]: checked });
  };

  const regions = ['경기도', '강원도', '전라도', '경상북도', '경상남도', '충청북도', '충청남도', '제주도'];

  return (
    <div className="flex flex-col">
      {/* Split the regions into rows */}
      <div className="flex flex-row justify-between">
        {regions.slice(0, 4).map((region) => (
          <div key={region} className="relative flex m-2 w-1/4">
            <input
              type="checkbox"
              id={region}
              name={region}
              checked={userData[region] || false}
              onChange={handleCheckboxChange}
              style = {{display:'none'}}
              className="absolute top-[calc(50%-theme(spacing.2))] peer w-4 h-4 left-6 accent-[#FF6414] rounded-full"
            />
            <label
              htmlFor={region}
              className="p-2 font-bold transition-colors duration-200 ease-in-out border-2 rounded select-none pl-8 peer-checked:text-[#FF6414] peer-checked:border-[#FF6414] text-xs uppercase leading-8 text-gray-500"
            >
              {region}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between">
        {regions.slice(4, 8).map((region) => (
          <div key={region} className="relative flex m-2 w-1/4">
            <input
              type="checkbox"
              id={region}
              name={region}
              checked={userData[region] || false}
              onChange={handleCheckboxChange}
              style = {{display:'none'}}
              className="absolute top-[calc(50%-theme(spacing.2))] peer w-4 h-4 left-6 accent-[#FF6414] rounded-full"
            />
            <label
              htmlFor={region}
              className="p-2 font-bold transition-colors duration-200 ease-in-out border-2 rounded select-none pl-8 peer-checked:text-[#FF6414] peer-checked:border-[#FF6414] text-xs uppercase leading-8 text-gray-500"
            >
              {region}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
