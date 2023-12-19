import { useStepperContext } from "../../contexts/StepperContext";

export default function Genre() {
  const { userData, setUserData } = useStepperContext();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUserData({ ...userData, [name]: checked });
  };

  const characteristics = [
    '슬픈', '유명한', '웃긴', '심오한', '감동적인', 
    '로맨틱한', '미스터리한', '역사적인', '과학적인', '공포', 
    '액션있는', '음악적인', '교육적인', '스릴 있는', '다큐멘터리', 
    '전통적인', '신비로운', '극적인', '사색적인', '냉소적인', 
    '강렬한', '밝은', '부드러운', '풍자적인', '흥미진진한', '가슴 아픈'
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
      {characteristics.map((characteristic) => (
        <div key={characteristic} className="relative flex m-2">
          <input
            type="checkbox"
            id={characteristic}
            name={characteristic}
            checked={userData[characteristic] || false}
            onChange={handleCheckboxChange}
            style = {{display:'none'}}
            className="absolute top-[calc(50%-theme(spacing.2))] peer w-4 h-4 left-6 accent-[#FF6414] rounded-full"
          />
          <label
            htmlFor={characteristic}
            className="p-2 font-bold transition-colors duration-200 ease-in-out border-2 rounded select-none pl-8 peer-checked:text-[#FF6414] peer-checked:border-[#FF6414] text-xs text-gray-500"
          >
            {characteristic}
          </label>
        </div>
      ))}
    </div>
  );
}
