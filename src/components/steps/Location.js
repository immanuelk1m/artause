import React, { useEffect} from 'react';
import { useStepperContext } from "../../contexts/StepperContext";
import { selectBOX } from "../../components/steps/selectBOX";
 

export default function Location() {
  const { userData, setUserData } = useStepperContext();
  
  useEffect(() => { 
    selectBOX();  // 시/도/군/구 selectBOX 생성함수를 컴포넌트가 로드 되자마자 실행해준다.

  }, []);
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="flex w-72">
        <select name="sido1" id="sido1" className="block py-3.5 px-5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"></select>
        <select name="gugun1" id="gugun1" className="block py-3.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"></select>
      </div>
    </div>

  );
}
